document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const eventsGrid = document.getElementById('events-grid');
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const closeModalBtn = document.querySelector('.modal-close');
    const dateFilter = document.getElementById('date-filter');
    const priceFilter = document.getElementById('price-filter');
    const districtFilter = document.getElementById('district-filter');
    const resetBtn = document.getElementById('reset-filters-btn');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeLightboxBtn = document.querySelector('.lightbox-close');
    const footerLinks = document.getElementById('footer-links');
    let map; // Variable to hold the map instance

    // Inline SVG assets for icons, making the site self-contained
    const locationIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="info-icon"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`;
    const districtIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="info-icon"><path d="M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM12 2a8 8 0 0 0-8 8c0 1.42.39 2.75 1.09 3.91L12 22l6.91-8.09A7.94 7.94 0 0 0 20 10a8 8 0 0 0-8-8zm0 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>`;
    const calendarIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="info-icon"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/></svg>`;
    const ticketIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="info-icon"><path d="M22 10V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v4c1.1 0 2 .9 2 2s-.9 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2zm-4 4H6v-2h12v2zm0-4H6V8h12v2z"/></svg>`;
    const imdbIconSvg = `<img src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" alt="IMDb logo" style="height: 20px; vertical-align: middle;">`;

    // --- DATA ENRICHMENT ---
    // Add detailed film info to each program item for easier access
    const enrichEventData = () => {
        events.forEach(event => {
            event.program.forEach(film => {
                const filmInfo = filmDatabase[film.title];
                if (filmInfo) {
                    film.details = filmInfo;
                }
            });
        });
    };

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

            // Create a clean class name for the district, e.g., "Nieuw-West" -> "nieuwwest"
            const districtClass = `district-${event.district.toLowerCase().replace(/[^a-z0-9]/g, '')}`;

            tile.innerHTML = `
                <img src="${event.imageUrl}" alt="${event.title}" class="tile-bg" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x400/cccccc/ffffff?text=Beeld+niet+beschikbaar';">
                <div class="event-tile-content">
                    <h2>${event.title}</h2>
                    <div class="event-info">
                        <span>${event.period}</span>
                        <span class="tag ${districtClass}">${event.district}</span>
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

        const galleryImages = event.imageGallery.map(url => 
            `<img src="${url}" alt="Sfeerfoto" loading="lazy" onerror="this.style.display='none'">`
        ).join('');

        modalBody.innerHTML = `
            <img src="${event.imageUrl}" alt="${event.title}" class="modal-gallery-header" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/800x250/cccccc/ffffff?text=Beeld+niet+beschikbaar';">
            <div class="modal-header">
                <div class="modal-header-top">
                    <h2>${event.title}</h2>
                    ${event.ticketLink ? `<a href="${event.ticketLink}" target="_blank" rel="noopener noreferrer" class="modal-ticket-btn">Tickets</a>` : ''}
                </div>
                <div class="modal-info-bar">
                     <div class="modal-info-item">
                        <a href="${event.gmaps}" target="_blank" rel="noopener noreferrer">
                            ${locationIconSvg}
                            <span>${event.location}</span>
                        </a>
                    </div>
                    <div class="modal-info-item">
                        ${districtIconSvg}
                        <span>Stadsdeel ${event.district}</span>
                    </div>
                     <div class="modal-info-item">
                        ${calendarIconSvg}
                        <span>${event.period}</span>
                    </div>
                     <div class="modal-info-item">
                        ${ticketIconSvg}
                        <span>${event.ticketPrice}</span>
                    </div>
                </div>
            </div>
            
            <div class="modal-main-content">
                <p class="modal-description">${event.description}</p>
                
                ${galleryImages ? `<div class="modal-gallery">${galleryImages}</div>` : ''}

                <h3 class="modal-section-title">
                    Programma
                    <span class="start-time">Start ca. ${event.startTime} uur</span>
                </h3>
                <div class="modal-info-item" style="margin-bottom: 15px; font-size: 0.9em;">
                    <span>Gesproken taal: ${event.languageDetails.spoken} | Ondertiteling: ${event.languageDetails.subtitles}</span>
                </div>
                <ul class="program-list">
                    ${event.program.map(p => `
                        <li>
                            <div class="program-item-header">
                                <span class="program-date">${p.date}</span>
                                <span class="program-title">${p.title}</span>
                                ${p.imdb ? `<a href="https://www.imdb.com/title/${p.imdb}" target="_blank" rel="noopener noreferrer" class="imdb-link" aria-label="Bekijk ${p.title} op IMDb">${imdbIconSvg}</a>` : ''}
                            </div>
                            ${p.details ? `<div class="program-details">${p.details.year} • ${p.details.genres.join(', ')} • ${p.details.duration} min</div>` : ''}
                            ${p.description ? `<p class="program-description">${p.description}</p>` : ''}
                        </li>
                    `).join('')}
                </ul>

                ${event.extras && event.extras.length > 0 ? `
                    <h3 class="modal-section-title">Handig om te weten</h3>
                    <ul>${event.extras.map(e => `<li>${e}</li>`).join('')}</ul>
                ` : ''}
                
                <div class="modal-links">
                    <a href="${event.website}" target="_blank" rel="noopener noreferrer">Officiële Website</a>
                    <a href="${event.gmaps}" target="_blank" rel="noopener noreferrer">Routebeschrijving</a>
                </div>
            </div>

            <div class="modal-bottom-widgets">
                <h3 class="modal-section-title">Locatie & Weer</h3>
                <div id="weather-widget" class="weather-widget">
                    <p>Weersvoorspelling wordt geladen...</p>
                </div>
                <div id="map"></div>
            </div>
        `;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        modal.setAttribute('aria-hidden', 'false');
        closeModalBtn.focus();
        
        // Add lightbox functionality to gallery images
        modalBody.querySelectorAll('.modal-gallery img').forEach(img => {
            img.addEventListener('click', () => {
                lightbox.style.display = 'flex';
                lightboxImg.src = img.src;
            });
        });
        
        // Render map and fetch weather after a short delay to ensure modal is visible
        setTimeout(() => {
            renderMap(event.coords.latitude, event.coords.longitude, event.title);
            fetchWeather(event.coords.latitude, event.coords.longitude);
        }, 100);
    };

    const closeModal = () => {
        if (map) {
            map.remove();
            map = null;
        }
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore background scrolling
        modal.setAttribute('aria-hidden', 'true');
    };

    // --- MAP RENDERING (using Leaflet.js) ---
    const renderMap = (lat, lon, title) => {
        // Check if the map container exists
        if (document.getElementById('map')) {
            map = L.map('map').setView([lat, lon], 15);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
            L.marker([lat, lon]).addTo(map)
                .bindPopup(`<b>${title}</b>`)
                .openPopup();
        }
    };

    // --- WEATHER WIDGET ---
    const fetchWeather = async (lat, lon) => {
        const weatherWidget = document.getElementById('weather-widget');
        const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Europe/Amsterdam&forecast_days=5`;

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error('Weather data not available');
            const data = await response.json();
            
            let forecastHtml = '<div class="weather-forecast">';
            data.daily.time.forEach((time, index) => {
                const date = new Date(time);
                const dayName = date.toLocaleDateString('nl-NL', { weekday: 'short' });
                const dayDate = date.toLocaleDateString('nl-NL', { day: 'numeric', month: 'short' });
                
                // Find the temperature around 21:00 for the evening forecast
                const hourIndex = data.hourly.time.findIndex(h => h.startsWith(time.split('T')[0] + 'T21:00'));
                
                const eveningTemp = hourIndex !== -1 ? Math.round(data.hourly.temperature_2m[hourIndex]) : '--';
                const eveningWeatherCode = hourIndex !== -1 ? data.hourly.weathercode[hourIndex] : data.daily.weathercode[index];
                
                forecastHtml += `
                    <div class="weather-day">
                        <div class="day">${dayName}</div>
                        <div class="date">${dayDate}</div>
                        <div class="icon" aria-label="${getWeatherDescription(eveningWeatherCode)}">${getWeatherIcon(eveningWeatherCode)}</div>
                        <div class="temp">${eveningTemp}°</div>
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
    const populateDateFilter = () => {
        const dates = new Set();
        events.forEach(event => {
            event.program.forEach(film => {
                // Extract just the date part like "6 aug"
                const dateMatch = film.date.match(/^(\d+\s\w+)/);
                if(dateMatch) {
                    dates.add(dateMatch[1]);
                }
            });
        });
        
        // Custom month order for sorting
        const monthOrder = { 'jul': 7, 'aug': 8, 'sep': 9 };

        const sortedDates = Array.from(dates).sort((a, b) => {
            const [dayA, monthStrA] = a.split(' ');
            const [dayB, monthStrB] = b.split(' ');
            const monthA = monthOrder[monthStrA.slice(0,3).toLowerCase()];
            const monthB = monthOrder[monthStrB.slice(0,3).toLowerCase()];

            if (monthA !== monthB) return monthA - monthB;
            return parseInt(dayA) - parseInt(dayB);
        });

        sortedDates.forEach(date => {
            const option = document.createElement('option');
            option.value = date;
            option.textContent = date;
            dateFilter.appendChild(option);
        });
    };
    
    const applyFilters = () => {
        const dateValue = dateFilter.value;
        const priceValue = priceFilter.value;
        const districtValue = districtFilter.value;

        const filteredEvents = events.filter(event => {
            const priceMatch = priceValue === 'all' || event.price === priceValue;
            const districtMatch = districtValue === 'all' || event.district === districtValue;
            // Check if any film in the program starts with the selected date
            const dateMatch = dateValue === 'all' || event.program.some(film => film.date.startsWith(dateValue));
            
            return dateMatch && priceMatch && districtMatch;
        });
        renderEvents(filteredEvents);
    };

    const resetFilters = () => {
        dateFilter.selectedIndex = 0;
        priceFilter.selectedIndex = 0;
        districtFilter.selectedIndex = 0;
        applyFilters();
    };

    // --- FAQ LOGIC ---
    const setupFAQ = () => {
        const faqContainer = document.querySelector('.faq-container');
        const faqs = [
            { q: "Wat moet ik meenemen naar een buitenbioscoop?", a: "Een warm dekentje of een extra trui is altijd een goed idee, want het kan 's avonds afkoelen. Soms kun je stoelen huren, maar een eigen comfortabel kussentje kan fijn zijn. Vergeet ook je pinpas niet, want veel locaties zijn cashless." },
            { q: "Gaan de voorstellingen door als het regent?", a: "Dit verschilt per organisatie. Grote festivals zoals Movies at H'ART delen poncho's uit, terwijl locaties als Pllek de voorstelling annuleren bij slecht weer. Check altijd de website of social media van het evenement op de dag zelf voor de laatste updates." },
            { q: "Mag ik mijn eigen eten en drinken meenemen?", a: "Bij de meeste commerciële evenementen is dit niet toegestaan, omdat ze zelf foodtrucks en bars hebben. Bij gratis buurtinitiatieven zoals West Beach Film Festival is het vaak wel mogelijk. Controleer de huisregels op de website van de organisator." },
            { q: "Zijn honden toegestaan?", a: "Over het algemeen niet, tenzij het specifiek wordt aangegeven. Een uitzondering is de 'Cinetree Dog Night' in het Amsterdamse Bostheater, waar je trouwe viervoeter van harte welkom is." },
            { q: "Hoe laat beginnen de films?", a: "De films starten meestal rond zonsondergang. In augustus is dit vaak tussen 21:00 en 21:30. In september kan dit al iets vroeger zijn. De exacte starttijd staat meestal vermeld bij het programma." },
            { q: "Is er ondertiteling beschikbaar?", a: "Bijna alle buitenlandse films worden vertoond in hun originele taal met Nederlandse ondertiteling. Bij evenementen met een zeer internationaal publiek (zoals Pluk de Nacht) kan de ondertiteling soms Engels zijn. Check de details in de pop-up!" },
            { q: "Moet ik van tevoren een kaartje kopen?", a: "Voor populaire betaalde evenementen is het sterk aan te raden om online van tevoren je ticket te kopen, omdat ze snel uitverkocht kunnen zijn. Voor gratis evenementen geldt: kom op tijd om een goed plekje te bemachtigen." },
            { q: "Zijn de locaties rolstoeltoegankelijk?", a: "De toegankelijkheid varieert sterk per locatie. Een aangelegd terras zoals bij NEMO is beter toegankelijk dan een stadsstrand. Neem bij twijfel altijd even contact op met de organisatie van het evenement." },
            { q: "Wat is het verschil tussen al die evenementen?", a: "Elk festival heeft zijn eigen sfeer! Van de arthouse-films bij Pluk de Nacht en de klassiekers in de chique tuin van het H'ART museum, tot de gratis buurtfeesten bij West Beach en Bijlmerbios. Er is echt voor ieder wat wils." },
            { q: "Waar vind ik de meest actuele informatie?", a: "Deze website doet zijn best om alles zo actueel mogelijk te houden, maar het programma kan altijd wijzigen. De officiële website van het evenement (de links vind je in de pop-up) is altijd de meest betrouwbare bron voor last-minute wijzigingen." }
        ];

        faqContainer.innerHTML = faqs.map(faq => `
            <div class="faq-item">
                <button class="faq-question">${faq.q}</button>
                <div class="faq-answer">
                    <p>${faq.a}</p>
                </div>
            </div>
        `).join('');

        faqContainer.querySelectorAll('.faq-question').forEach(button => {
            button.addEventListener('click', () => {
                const answer = button.nextElementSibling;
                const isActive = button.classList.contains('active');
                
                // Close all other open FAQs
                faqContainer.querySelectorAll('.faq-question.active').forEach(activeButton => {
                    if (activeButton !== button) {
                        activeButton.classList.remove('active');
                        activeButton.nextElementSibling.style.maxHeight = 0;
                        activeButton.nextElementSibling.style.padding = "0 10px 0 10px";
                    }
                });

                // Toggle the clicked FAQ
                button.classList.toggle('active', !isActive);
                if (!isActive) {
                    answer.style.maxHeight = answer.scrollHeight + "px";
                    answer.style.padding = "0 10px 20px 10px";
                } else {
                    answer.style.maxHeight = 0;
                    answer.style.padding = "0 10px 0 10px";
                }
            });
        });
    };
    
    // --- FOOTER LINKS ---
    const populateFooterLinks = () => {
        footerLinks.innerHTML = events.map(event => `
            <li><a href="#" data-event-id="${event.id}">${event.title}</a></li>
        `).join('');
        
        footerLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                openModal(e.target.dataset.eventId);
                // Scroll to top to see the modal
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
    };

    // --- EVENT LISTENERS ---
    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        // Close modal if the outer background is clicked
        if (e.target === modal) {
            closeModal();
        }
    });
    document.addEventListener('keydown', (e) => {
        // Close modal with Escape key
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
    
    closeLightboxBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });
    lightbox.addEventListener('click', (e) => {
        // Close lightbox if the outer background is clicked
        if(e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // Add listeners for filter changes
    dateFilter.addEventListener('change', applyFilters);
    priceFilter.addEventListener('change', applyFilters);
    districtFilter.addEventListener('change', applyFilters);
    resetBtn.addEventListener('click', resetFilters);

    // --- INITIALIZATION ---
    enrichEventData();
    populateDateFilter();
    renderEvents(events);
    setupFAQ();
    populateFooterLinks();
});
