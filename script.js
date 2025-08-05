document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const eventsGrid = document.getElementById('events-grid');
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const closeModalBtn = document.querySelector('.modal-close');
    const dateFilter = document.getElementById('date-filter');
    const priceFilter = document.getElementById('price-filter');
    const districtFilter = document.getElementById('district-filter');

    // --- EVENT RENDERING ---
    const renderEvents = (filteredEvents) => {
        eventsGrid.innerHTML = '';
        if (filteredEvents.length === 0) {
            eventsGrid.innerHTML = '<p class="no-results">Geen evenementen gevonden die aan je criteria voldoen.</p>';
            return;
        }

        filteredEvents.forEach(event => {
            const tile = document.createElement('div');
            tile.className = 'event-tile';
            tile.dataset.eventId = event.id;
            tile.setAttribute('role', 'button');
            tile.setAttribute('tabindex', '0');
            tile.setAttribute('aria-label', `Bekijk details voor ${event.title}`);

            const languageTag = event.language.toUpperCase().replace('/', '-');

            tile.innerHTML = `
                <div class="event-tile-content">
                    <h2>${event.title}</h2>
                    <div class="event-info">
                        <span>${event.period}</span>
                        <div>
                            <span class="tag lang-${languageTag.toLowerCase()}">${event.language}</span>
                            <span class="tag price-${event.price}">${event.price === 'free' ? 'Gratis' : 'Betaald'}</span>
                        </div>
                    </div>
                </div>
            `;
            
            tile.addEventListener('click', () => openModal(event.id));
            tile.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    openModal(event.id);
                }
            });
            eventsGrid.appendChild(tile);
        });
    };

    // --- MODAL HANDLING ---
    const openModal = (eventId) => {
        const event = events.find(e => e.id === eventId);
        if (!event) return;

        modalBody.innerHTML = `
            <div class="modal-header">
                <h2>${event.title}</h2>
                <p class="location">
                    <img src="assets/location-pin.svg" alt="Location" class="location-icon">
                    ${event.location}
                </p>
            </div>
            <p class="modal-description">${event.description}</p>
            
            <h3 class="modal-section-title">Weersvoorspelling</h3>
            <div id="weather-widget" class="weather-widget">
                <p>Weersvoorspelling wordt geladen...</p>
            </div>

            <h3 class="modal-section-title">Programma</h3>
            <ul class="program-list">
                ${event.program.map(p => `
                    <li>
                        <span class="program-date">${p.date}</span>
                        <span class="program-title">${p.title}</span>
                        ${p.imdb ? `<a href="https://www.imdb.com/title/${p.imdb}" target="_blank" rel="noopener noreferrer" class="imdb-link" aria-label="Bekijk ${p.title} op IMDb"><img src="assets/imdb-logo.svg" alt="IMDb"></a>` : ''}
                    </li>
                `).join('')}
            </ul>

            ${event.extras && event.extras.length > 0 ? `
                <h3 class="modal-section-title">Handig om te weten</h3>
                <ul>${event.extras.map(e => `<li>${e}</li>`).join('')}</ul>
            ` : ''}
            
            <div class="modal-links">
                <a href="${event.website}" target="_blank" rel="noopener noreferrer">Officiële Website</a>
                ${event.ticketLink ? `<a href="${event.ticketLink}" target="_blank" rel="noopener noreferrer" class="secondary">Koop Tickets</a>` : ''}
                <a href="${event.gmaps}" target="_blank" rel="noopener noreferrer">Routebeschrijving</a>
            </div>
        `;
        modal.style.display = 'block';
        modal.setAttribute('aria-hidden', 'false');
        closeModalBtn.focus();
        fetchWeather(event.coords.latitude, event.coords.longitude);
    };

    const closeModal = () => {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
    };

    // --- WEATHER WIDGET ---
    const fetchWeather = async (lat, lon) => {
        const weatherWidget = document.getElementById('weather-widget');
        const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Europe/Amsterdam&forecast_days=5`;

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error('Weather data not available');
            const data = await response.json();
            
            let forecastHtml = '<div class="weather-forecast">';
            data.daily.time.forEach((time, index) => {
                const day = new Date(time).toLocaleDateString('nl-NL', { weekday: 'short' });
                const weatherCode = data.daily.weathercode[index];
                const maxTemp = Math.round(data.daily.temperature_2m_max[index]);
                const minTemp = Math.round(data.daily.temperature_2m_min[index]);
                
                forecastHtml += `
                    <div class="weather-day">
                        <div class="day">${day}</div>
                        <div class="icon" aria-label="${getWeatherDescription(weatherCode)}">${getWeatherIcon(weatherCode)}</div>
                        <div class="temp">${maxTemp}° / ${minTemp}°</div>
                    </div>
                `;
            });
            forecastHtml += '</div>';
            weatherWidget.innerHTML = forecastHtml;

        } catch (error) {
            weatherWidget.innerHTML = '<p>Kon de weersvoorspelling niet ophalen.</p>';
            console.error("Weather fetch error:", error);
        }
    };

    const getWeatherIcon = (code) => {
        if ([0, 1].includes(code)) return '☀️'; // Clear, mainly clear
        if ([2].includes(code)) return '⛅️'; // Partly cloudy
        if ([3].includes(code)) return '☁️'; // Overcast
        if ([45, 48].includes(code)) return '🌫️'; // Fog
        if ([51, 53, 55, 56, 57].includes(code)) return '🌦️'; // Drizzle
        if ([61, 63, 65, 66, 67].includes(code)) return '🌧️'; // Rain
        if ([71, 73, 75, 77, 85, 86].includes(code)) return '❄️'; // Snow
        if ([80, 81, 82].includes(code)) return '🌧️'; // Rain showers
        if ([95, 96, 99].includes(code)) return '⛈️'; // Thunderstorm
        return '❔';
    };
    
    const getWeatherDescription = (code) => {
        const descriptions = {
            0: 'Heldere hemel', 1: 'Grotendeels helder', 2: 'Gedeeltelijk bewolkt', 3: 'Bewolkt',
            45: 'Mist', 48: 'Rijpende mist', 51: 'Lichte motregen', 53: 'Matige motregen', 55: 'Dichte motregen',
            61: 'Lichte regen', 63: 'Matige regen', 65: 'Zware regen', 80: 'Lichte regenbuien', 81: 'Matige regenbuien',
            82: 'Hevige regenbuien', 95: 'Onweer', 96: 'Onweer met lichte hagel', 99: 'Onweer met zware hagel'
        };
        return descriptions[code] || 'Weer onbekend';
    };


    // --- FILTERING LOGIC ---
    const applyFilters = () => {
        const dateValue = dateFilter.value;
        const priceValue = priceFilter.value;
        const districtValue = districtFilter.value;

        const filteredEvents = events.filter(event => {
            const dateMatch = dateValue === 'all' || event.month.includes(dateValue);
            const priceMatch = priceValue === 'all' || event.price === priceValue;
            const districtMatch = districtValue === 'all' || event.district === districtValue;
            return dateMatch && priceMatch && districtMatch;
        });
        renderEvents(filteredEvents);
    };

    // --- EVENT LISTENERS ---
    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    dateFilter.addEventListener('change', applyFilters);
    priceFilter.addEventListener('change', applyFilters);
    districtFilter.addEventListener('change', applyFilters);

    // Initial render on page load
    renderEvents(events);
});
