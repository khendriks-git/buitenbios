/**
 * events.js
 * * Dit bestand fungeert als de 'database' voor de website.
 * Alle informatie over de buitenbioscoop-evenementen staat hier in een gestructureerd formaat.
 * Om de site aan te passen, hoef je alleen dit bestand te wijzigen.
 * * Hoe een evenement aan te passen:
 * - Zoek het evenement in de 'events' array hieronder.
 * - Wijzig de waarden van de velden (bv. 'title', 'period', 'location').
 * - Om een film toe te voegen, voeg een nieuw object toe aan de 'program' array.
 * * Hoe een evenement toe te voegen:
 * - Kopieer een bestaand evenement-object (alles van het eerste '{' tot het laatste '}').
 * - Plak het aan het einde van de lijst (vóór de laatste ']').
 * - Pas alle informatie aan voor het nieuwe evenement. Zorg voor een unieke 'id'.
 * * Hoe een evenement te verwijderen:
 * - Verwijder het volledige object van het evenement uit de array.
 */
const filmDatabase = {
    "10 Things I Hate About You": { year: 1999, lang: "Engels", country: "VS", duration: 97, genres: ["Komedie", "Drama", "Romantiek"] },
    "7 Years in Tibet": { year: 1997, lang: "Engels", country: "VS", duration: 136, genres: ["Avontuur", "Biografie", "Drama"] },
    "A Bright Future": { year: 2025, lang: "Spaans", country: "Duitsland, Uruguay, Argentinië", duration: 98, genres: ["Sciencefiction"] },
    "A Man Called Otto": { year: 2022, lang: "Engels", country: "VS", duration: 126, genres: ["Komedie", "Drama"] },
    "A Vida Luminosa": { year: 2025, lang: "Portugees", country: "Portugal", duration: 106, genres: ["Drama"] },
    "About a Boy": { year: 2002, lang: "Engels", country: "VK", duration: 101, genres: ["Komedie", "Drama", "Romantiek"] },
    "Amélie": { year: 2001, lang: "Frans", country: "Frankrijk", duration: 122, genres: ["Komedie", "Romantiek"] },
    "Amsterdam": { year: 2022, lang: "Engels", country: "VS", duration: 134, genres: ["Komedie", "Drama", "Historie"] },
    "Anora": { year: 2024, lang: "Engels, Russisch", country: "VS", duration: 139, genres: ["Komedie", "Drama", "Romantiek"] },
    "Billy Elliot": { year: 2000, lang: "Engels", country: "VK", duration: 110, genres: ["Drama", "Muziek"] },
    "Bitter Gold": { year: 2024, lang: "Spaans", country: "Duitsland, Uruguay, Chili", duration: 83, genres: ["Neowestern", "Thriller", "Drama"] },
    "Bohemian Rhapsody": { year: 2018, lang: "Engels", country: "VK", duration: 134, genres: ["Biografie", "Drama", "Muziek"] },
    "Bridget Jones's Diary": { year: 2001, lang: "Engels", country: "VK", duration: 97, genres: ["Komedie", "Drama", "Romantiek"] },
    "Brother Verses Brother": { year: 2025, lang: "Engels", country: "VS", duration: 91, genres: ["Komedie", "Drama", "Muziek"] },
    "Caro Diario": { year: 1993, lang: "Italiaans", country: "Italië", duration: 100, genres: ["Komedie", "Drama"] },
    "Catch Me If You Can": { year: 2002, lang: "Engels", country: "VS", duration: 141, genres: ["Biografie", "Misdaad", "Drama"] },
    "Challengers": { year: 2024, lang: "Engels", country: "VS", duration: 131, genres: ["Komedie", "Drama", "Romantiek"] },
    "Dirty Dancing": { year: 1987, lang: "Engels", country: "VS", duration: 100, genres: ["Drama", "Muziek", "Romantiek"] },
    "Do the Right Thing": { year: 1989, lang: "Engels", country: "VS", duration: 120, genres: ["Komedie", "Drama"] },
    "Ex Machina": { year: 2014, lang: "Engels", country: "VK", duration: 108, genres: ["Sci-Fi", "Drama", "Thriller"] },
    "Fantastic Mr. Fox": { year: 2009, lang: "Engels", country: "VS", duration: 87, genres: ["Animatie", "Avontuur", "Komedie"] },
    "Fatma": { year: 1960, lang: "Turks", country: "Turkije", duration: 105, genres: ["Drama", "Romantiek"]},
    "Flow": { year: 2024, lang: "Geen dialoog", country: "Letland, Frankrijk, België", duration: 84, genres: ["Animatie", "Avontuur", "Familie"] },
    "Forrest Gump": { year: 1994, lang: "Engels", country: "VS", duration: 142, genres: ["Drama", "Romantiek"] },
    "Fwends": { year: 2025, lang: "Engels, Frans", country: "Australië", duration: 92, genres: ["Komedie"] },
    "Ghost In The Shell": { year: 1995, lang: "Japans", country: "Japan", duration: 83, genres: ["Animatie", "Actie", "Sci-Fi"] },
    "Gloria!": { year: 2024, lang: "Italiaans", country: "Italië", duration: 100, genres: ["Historie", "Muziek"] },
    "Grease": { year: 1978, lang: "Engels", country: "VS", duration: 110, genres: ["Musical", "Romantiek"] },
    "Green Book": { year: 2018, lang: "Engels", country: "VS", duration: 130, genres: ["Biografie", "Komedie", "Drama"] },
    "Hababam Sınıfı": { year: 1975, lang: "Turks", country: "Turkije", duration: 87, genres: ["Komedie", "Drama"] },
    "Her": { year: 2013, lang: "Engels", country: "VS", duration: 126, genres: ["Drama", "Romantiek", "Sci-Fi"] },
    "In the Heights": { year: 2021, lang: "Engels", country: "VS", duration: 143, genres: ["Drama", "Musical", "Romantiek"] },
    "Interstellar": { year: 2014, lang: "Engels", country: "VS", duration: 169, genres: ["Avontuur", "Drama", "Sci-Fi"] },
    "Into the Wild": { year: 2007, lang: "Engels", country: "VS", duration: 148, genres: ["Avontuur", "Biografie", "Drama"] },
    "Ja Zuster, Nee Zuster": { year: 2002, lang: "Nederlands", country: "Nederland", duration: 104, genres: ["Komedie", "Muzikaal"] },
    "Kabhi Khushi Kabhie Gham": { year: 2001, lang: "Hindi", country: "India", duration: 210, genres: ["Drama", "Musical", "Romantiek"] },
    "Kneecap": { year: 2024, lang: "Iers, Engels", country: "Ierland", duration: 105, genres: ["Biografie", "Komedie", "Drama"] },
    "Kontinental ’25": { year: 2025, lang: "Roemeens, Hongaars, Duits", country: "Roemenië", duration: 109, genres: ["Komedie-drama"] },
    "La Chimera": { year: 2023, lang: "Italiaans", country: "Italië", duration: 130, genres: ["Avontuur", "Komedie", "Drama"] },
    "La La Land": { year: 2016, lang: "Engels", country: "VS", duration: 128, genres: ["Komedie", "Drama", "Musical"] },
    "La vita è bella": { year: 1997, lang: "Italiaans", country: "Italië", duration: 116, genres: ["Komedie", "Drama", "Romantiek"] },
    "Lion": { year: 2016, lang: "Engels", country: "Australië", duration: 118, genres: ["Biografie", "Drama"] },
    "Life of Pi": { year: 2012, lang: "Engels", country: "VS", duration: 127, genres: ["Avontuur", "Drama", "Fantasy"] },
    "Little Miss Sunshine": { year: 2006, lang: "Engels", country: "VS", duration: 101, genres: ["Komedie", "Drama"] },
    "Lost in Translation": { year: 2003, lang: "Engels", country: "VS", duration: 102, genres: ["Komedie", "Drama"] },
    "Mamma Mia!": { year: 2008, lang: "Engels", country: "VS", duration: 108, genres: ["Komedie", "Musical", "Romantiek"] },
    "Mean Girls": { year: 2004, lang: "Engels", country: "VS", duration: 97, genres: ["Komedie"] },
    "Midnight in Paris": { year: 2011, lang: "Engels", country: "VS", duration: 94, genres: ["Komedie", "Fantasy", "Romantiek"] },
    "Mrs. Doubtfire": { year: 1993, lang: "Engels", country: "VS", duration: 125, genres: ["Komedie", "Drama", "Familie"] },
    "No Country for Old Men": { year: 2007, lang: "Engels", country: "VS", duration: 122, genres: ["Misdaad", "Drama", "Thriller"] },
    "Notting Hill": { year: 1999, lang: "Engels", country: "VK", duration: 124, genres: ["Komedie", "Drama", "Romantiek"] },
    "On the Road": { year: 2012, lang: "Engels", country: "VS", duration: 124, genres: ["Avontuur", "Drama", "Romantiek"] },
    "Paddington in Peru": { year: 2024, lang: "Engels", country: "VK", duration: 100, genres: ["Animatie", "Avontuur", "Komedie"] },
    "Perfect Days": { year: 2023, lang: "Japans", country: "Japan", duration: 125, genres: ["Drama"] },
    "Skyfall": { year: 2012, lang: "Engels", country: "VK", duration: 143, genres: ["Actie", "Avontuur", "Thriller"] },
    "Sweet Dreams": { year: 2023, lang: "Nederlands", country: "Nederland", duration: 102, genres: ["Drama"] },
    "Thank You for Banking with Us": { year: 2024, lang: "Arabisch, Engels", country: "Palestina", duration: 92, genres: ["Drama"] },
    "The Adventures of Baron Munchausen": { year: 1988, lang: "Engels", country: "VK", duration: 126, genres: ["Avontuur", "Komedie", "Fantasy"] },
    "The Baltimorons": { year: 2025, lang: "Engels", country: "VS", duration: 99, genres: ["Romantische komedie"] },
    "The Devil Wears Prada": { year: 2006, lang: "Engels", country: "VS", duration: 109, genres: ["Komedie", "Drama"] },
    "The Fish Fall in Love": { year: 2006, lang: "Perzisch", country: "Iran", duration: 95, genres: ["Drama", "Romantiek"]},
    "The Grand Budapest Hotel": { year: 2014, lang: "Engels", country: "VS", duration: 99, genres: ["Avontuur", "Komedie", "Drama"] },
    "The Life Aquatic with Steve Zissou": { year: 2004, lang: "Engels", country: "VS", duration: 119, genres: ["Avontuur", "Komedie", "Drama"] },
    "The Proposal": { year: 2009, lang: "Engels", country: "VS", duration: 108, genres: ["Komedie", "Drama", "Romantiek"] },
    "The Salt Path": { year: 2024, lang: "Engels", country: "VK", duration: 112, genres: ["Drama"]},
    "The Secret Life of Walter Mitty": { year: 2013, lang: "Engels", country: "VS", duration: 114, genres: ["Avontuur", "Komedie", "Drama"] },
    "The Terminal": { year: 2004, lang: "Engels", country: "VS", duration: 128, genres: ["Komedie", "Drama", "Romantiek"] },
    "The Terminator": { year: 1984, lang: "Engels", country: "VS", duration: 107, genres: ["Actie", "Sci-Fi"] },
    "Thelma & Louise": { year: 1991, lang: "Engels", country: "VS", duration: 130, genres: ["Avontuur", "Misdaad", "Drama"] },
    "There Will Be Blood": { year: 2007, lang: "Engels", country: "VS", duration: 158, genres: ["Drama"]},
    "Time of the Gypsies": { year: 1988, lang: "Servokroatisch", country: "Joegoslavië", duration: 142, genres: ["Komedie", "Misdaad", "Drama"]},
    "Top Gun: Maverick": { year: 2022, lang: "Engels", country: "VS", duration: 130, genres: ["Actie", "Drama"] },
    "Up": { year: 2009, lang: "Engels", country: "VS", duration: 96, genres: ["Animatie", "Avontuur", "Komedie"] },
    "Vicky Cristina Barcelona": { year: 2008, lang: "Engels", country: "VS", duration: 96, genres: ["Komedie", "Drama", "Romantiek"] },
    "What Does That Nature Say to You?": { year: 2025, lang: "Koreaans", country: "Zuid-Korea", duration: 108, genres: ["Komedie", "Drama", "Romance"] },
    "When Harry Met Sally...": { year: 1989, lang: "Engels", country: "VS", duration: 95, genres: ["Komedie", "Drama", "Romantiek"] },
};

const events = [
    {
        "id": "hart-museum",
        "title": "Movies at H'ART Museum",
        "period": "6 - 26 augustus 2025",
        "month": ["august"],
        "price": "paid",
        "ticketPrice": "€14 - €17",
        "district": "Centrum",
        "startTime": "21:00",
        "languageDetails": { "spoken": "Engels", "subtitles": "Nederlands" },
        "location": "Binnentuin H'ART Museum, Nieuwe Keizersgracht 1, Amsterdam",
        "coords": { "latitude": 52.3639, "longitude": 4.9022 },
        "gmaps": "https://www.google.com/maps/search/?api=1&query=H'ART+Museum+Amsterdam",
        "description": "De grootste openluchtbioscoop van Amsterdam, gesitueerd in de majestueuze en sfeervolle binnentuin van het H'ART Museum. De sfeer is romantisch en stijlvol, perfect voor een avond wegdromen bij geliefde filmklassiekers. Elke voorstelling begint met een legendarische filmquiz en een korte inleiding.",
        "website": "https://www.hartmuseum.nl/activiteiten/movies-hart-museum/",
        "ticketLink": "https://www.moviesathartmuseum.nl/tickets/",
        "imageUrl": "https://www.hartmuseum.nl/wp-content/uploads/2024/05/Movies-2023-768x511.jpg",
        "imageGallery": [
            "https://www.hartmuseum.nl/wp-content/uploads/2024/05/Bora-bora-productions-Movies-at-the-Hermitage-3-1024x683.jpg",
            "https://www.hartmuseum.nl/wp-content/uploads/2024/05/Bora-bora-productions-Movies-at-the-Hermitage-2-768x512.jpg",
            "https://www.hartmuseum.nl/wp-content/uploads/2024/05/Bora-bora-productions-Movies-at-the-Hermitage-768x512.jpg"
        ],
        "program": [
            { "date": "6 aug", "title": "Vicky Cristina Barcelona", "imdb": "tt0497465" },
            { "date": "7 aug", "title": "Fantastic Mr. Fox", "imdb": "tt0432283" },
            { "date": "8 aug", "title": "10 Things I Hate About You", "imdb": "tt0147800" },
            { "date": "9 aug", "title": "Kneecap", "imdb": "tt27552979" },
            { "date": "10 aug", "title": "Lost in Translation", "imdb": "tt0335266" },
            { "date": "11 aug", "title": "On the Road", "imdb": "tt0337692" },
            { "date": "13 aug", "title": "Up", "imdb": "tt1049413" },
            { "date": "14 aug", "title": "Dirty Dancing", "imdb": "tt0092890" },
            { "date": "15 aug", "title": "Ja Zuster, Nee Zuster", "imdb": "tt0309725" },
            { "date": "16 aug", "title": "Challengers", "imdb": "tt16426418" },
            { "date": "17 aug", "title": "Perfect Days", "imdb": "tt27503384" },
            { "date": "18 aug", "title": "7 Years in Tibet", "imdb": "tt0120102" },
            { "date": "20 aug", "title": "Do the Right Thing", "imdb": "tt0097216" },
            { "date": "21 aug", "title": "No Country for Old Men", "imdb": "tt0477348" },
            { "date": "22 aug", "title": "The Secret Life of Walter Mitty", "imdb": "tt0359950" },
            { "date": "23 aug", "title": "Top Gun: Maverick", "imdb": "tt1745960" },
            { "date": "25 aug", "title": "Into the Wild", "imdb": "tt0758758" },
            { "date": "26 aug", "title": "Thelma & Louise", "imdb": "tt0103074" }
        ],
        "extras": ["Bij regen worden er poncho's uitgedeeld.", "Art Movie Mondays hebben een speciale focus op kunstfilms."]
    },
    {
        "id": "pluk-de-nacht",
        "title": "Pluk de Nacht",
        "period": "20 - 30 augustus 2025",
        "month": ["august"],
        "price": "paid",
        "ticketPrice": "€11 (stoel)",
        "district": "Centrum",
        "startTime": "21:30",
        "languageDetails": { "spoken": "Divers (meestal Engels)", "subtitles": "Engels" },
        "location": "Het Stenen Hoofd, Westerdoksdijk, Amsterdam",
        "coords": { "latitude": 52.3890, "longitude": 4.8910 },
        "gmaps": "https://maps.app.goo.gl/74xQ2b4u9kjDg9D59",
        "description": "Het belangrijkste onafhankelijke openluchtfilmfestival van Nederland op een rauwe, industriële stadspier aan het IJ. De programmering is tegendraads en richt zich op films (speelfilms, docu's, shorts) die de reguliere bioscoop vaak niet halen.",
        "website": "https://plukdenacht.nl/",
        "ticketLink": "https://plukdenacht.nl/",
        "imageUrl": "https://plukdenacht.nl/wp-content/uploads/2023/09/Pluk-de-Nacht-2023-79981-1-scaled.jpg",
        "imageGallery": [
            "https://image.parool.nl/220058609/width/1280/pluk-de-nacht-bij-het-stenen-hoofd-in-west",
            "https://plukdenacht.nl/wp-content/uploads/2023/09/Pluk-de-Nacht-2023-1362-1-1024x768.jpg",
            "https://plukdenacht.nl/wp-content/uploads/2023/08/everbruggen_20230826_web_25-1024x683.jpg"
        ],
        "program": [
            { "date": "20 aug (13:00)", "title": "Randprogramma: Intocht Sail", "description": "Vanwege Sail gaan we vandaag eerder open, en je kunt ’s middags al een strandstoel huren om van de bootjes te genieten." },
            { "date": "20 aug (21:30)", "title": "Short: Candy Bar", "description": "In de bioscoop krijgt een man van een meisje te horen dat hij op haar vader lijkt." },
            { "date": "20 aug (21:30)", "title": "A Bright Future", "imdb": "tt27989338", "description": "Een dystopische wereld waar wel cassettebandjes zijn, maar geen dieren meer." },
            { "date": "21 aug", "title": "What Does That Nature Say to You?", "imdb": "tt32039328", "description": "Een dolende dichter, een huis met kippen, en een ontmoeting met de schoonfamilie." },
            { "date": "22 aug (19:15)", "title": "Binnenfilm: Life of Pi", "imdb": "tt0454876", "description": "Een jongen, een tijger, een reddingsboot – en een verhaal dat je kijk op waarheid voorgoed verandert." },
            { "date": "22 aug", "title": "100 Litres of Gold", "imdb": "tt31355431", "description": "Twee zussen moeten met een kater en tegen de klok nieuwe liters bier brouwen om een familiedrama te voorkomen." },
            { "date": "23 aug (19:15)", "title": "Binnenfilm: The Life Aquatic with Steve Zissou", "imdb": "tt0362270", "description": "Een zeldzame haai, een verloren vriend en een mislukte oceaanheld op wraaktocht." },
            { "date": "23 aug", "title": "Brother Verses Brother", "imdb": "tt27534531", "description": "Twee broers zoeken hun 99-jarige vader in San Francisco – zingend, ruziënd en improviserend." },
            { "date": "24 aug (14:00)", "title": "Pluk MINI (kindereditie)", "description": "Een paradijs voor kleine avonturiers met Popeye op het grote doek, bootjes bouwen en de legendarische Pluk MINI disco." },
            { "date": "24 aug", "title": "Kontinental ’25", "imdb": "tt31840813", "description": "Een gerechtsdeurwaarder worstelt met haar schuldgevoel in een messcherpe satire over het kapitalisme." },
            { "date": "25 aug", "title": "Bitter Gold", "imdb": "tt29524741", "description": "Een spannende Chileense western over overleven, loyaliteit en de prijs van hebzucht." },
            { "date": "26 aug", "title": "A Vida Luminosa", "imdb": "tt31835331", "description": "Een warme, lichte film over de mooie chaos van jong-volwassen zijn in Lissabon." },
            { "date": "27 aug", "title": "Thank You for Banking with Us", "imdb": "tt28424264", "description": "Twee zussen proberen met een list hun erfenis veilig te stellen in een schrijnend én geestig kat-en-muisspel." },
            { "date": "28 aug", "title": "Shorts Night!", "description": "Een avondvullend programma met korte films over het menselijk lichaam en alles wat daarbij komt kijken." },
            { "date": "29 aug (19:15)", "title": "Binnenfilm: Billy Elliot", "imdb": "tt0249462", "description": "Een hartverwarmend coming-of-ageverhaal over dromen, moed en het doorbreken van verwachtingen." },
            { "date": "29 aug", "title": "The Baltimorons", "imdb": "tt31128189", "description": "Een ex-standupper en een noodtandarts vinden elkaar tijdens een lange Kerstavond in Baltimore." },
            { "date": "30 aug (19:15)", "title": "Binnenfilm: Little Miss Sunshine", "imdb": "tt0449059", "description": "Een chaotische roadtrip van een gestoorde familie verandert in een hartverwarmend verhaal." },
            { "date": "30 aug", "title": "Fwends", "imdb": "tt32319086", "description": "Twee GenZ-vriendinnen van vroeger zien elkaar weer terug in Melbourne, met totaal geïmproviseerde gesprekken." }
        ],
        "extras": ["Terrein is gratis toegankelijk, je betaalt voor een strandstoel.", "Na de film is er 'De Stille Nachtclub' om te dansen."]
    },
    {
        "id": "west-beach",
        "title": "West Beach Film Festival",
        "period": "17 - 21 september 2025",
        "month": ["september"],
        "price": "free",
        "ticketPrice": "Gratis",
        "district": "Nieuw-West",
        "startTime": "20:30",
        "languageDetails": { "spoken": "Nederlands/Engels", "subtitles": "Nederlands/Engels" },
        "location": "Buurtwerkplaats Noorderhof, Sloterplas",
        "coords": { "latitude": 52.3687, "longitude": 4.8037 },
        "gmaps": "https://www.google.com/maps/search/?api=1&query=Buurtwerkplaats+Noorderhof+Sloterplas",
        "description": "Een gratis, vijfdaags evenement aan de oevers van de Sloterplas. Meer dan alleen film; een viering van de buurt met muziek, kunst, workshops en gezamenlijke maaltijden. Het thema voor 2025 is 'HABITAT'.",
        "website": "https://westbeachfilmfestival.com/",
        "ticketLink": null,
        "imageUrl": "https://storage.pubble.nl/648e3015/content/2022/6/183dbfe6-97fa-4cff-8169-ff4e358cf8d6_thumb1920.jpg",
        "imageGallery": [
            "https://app.thefeedfactory.nl/api/assets/6878c7f77c674714bad23b56/west_beach_film_festival.jpg",
            "https://app.thefeedfactory.nl/api/assets/65aa91c28a54014acca58517/Ontwerp_zonder_titel.jpg",
            "https://image.parool.nl/221621106/width/1280/west-beach-film-festival-in-nieuw-west"
        ],
        "program": [
            { "date": "17 sep", "title": "Anora", "imdb": "tt29298482" },
            { "date": "18 sep", "title": "Sweet Dreams", "imdb": "tt21223406" },
            { "date": "19 sep", "title": "Skyfall", "imdb": "tt1074638" },
            { "date": "20 sep", "title": "Paddington in Peru", "imdb": "tt2262245" },
            { "date": "21 sep", "title": "Time of the Gypsies", "imdb": "tt0097223" }
        ],
        "extras": ["Toegang is gratis (pay-as-you-like).", "Vaak vergezeld van live DJ-sets en workshops."]
    },
    {
        "id": "cinetree",
        "title": "Cinetree Forest Film Festival",
        "period": "14 - 17 augustus 2025",
        "month": ["august"],
        "price": "paid",
        "ticketPrice": "€15",
        "district": "Zuid",
        "startTime": "21:00",
        "languageDetails": { "spoken": "Engels", "subtitles": "Nederlands" },
        "location": "Amsterdamse Bostheater, Amsterdamse Bos",
        "coords": { "latitude": 52.3297, "longitude": 4.8385 },
        "gmaps": "https://www.google.com/maps/search/?api=1&query=Amsterdamse+Bostheater",
        "description": "Een magische filmervaring in het Amsterdamse Bostheater. Het festival combineert filmvertoningen onder de sterrenhemel met muziek, poëzie en inleidingen van experts voor een diepere beleving.",
        "website": "https://bostheater.nl/ons-programma/cinetree/",
        "ticketLink": "https://bostheater.nl/ons-programma/cinetree/",
        "imageUrl": "https://media.iamsterdam.com/w_907,h_514/1xdpg3tii444-cinetree-forest-film-festival.webp",
        "imageGallery": [
            "https://media.iamsterdam.com/w_907,h_514/4644yllu7ljt-cinetree-forest-film-festival1.webp",
            "https://media.iamsterdam.com/w_907,h_514/4tbr3ce4udax-cinetree-forest-film-festival.webp",
            "https://image.parool.nl/206989192/width/2480/dit-weekend-vindt-het-forest-film-festival-plaats"
        ],
        "program": [
            { "date": "14 aug", "title": "The Salt Path", "imdb": "tt13632948" },
            { "date": "15 aug", "title": "Do the Right Thing", "imdb": "tt0097216" },
            { "date": "16 aug", "title": "Lion", "imdb": "tt3741834" },
            { "date": "17 aug", "title": "Flow", "imdb": "tt22513420" }
        ],
        "extras": ["Op 17 augustus is de 'Cinetree Dog Night', honden zijn dan welkom!", "Niet te verwarren met 'Bosbios', wat in Hilversum plaatsvindt."]
    },
     {
        "id": "pllek",
        "title": "Films with a View bij Pllek",
        "period": "Elke dinsdag t/m september",
        "month": ["august", "september"],
        "price": "paid",
        "ticketPrice": "€10",
        "district": "Noord",
        "startTime": "22:00",
        "languageDetails": { "spoken": "Engels", "subtitles": "Geen (koptelefoon)" },
        "location": "Pllek, NDSM-werf, Amsterdam",
        "coords": { "latitude": 52.3992, "longitude": 4.8931 },
        "gmaps": "https://www.google.com/maps/search/?api=1&query=Pllek+Amsterdam",
        "description": "Elke dinsdagavond transformeert het stadsstrand aan de NDSM-werf in een bioscoop met een adembenemend uitzicht op de skyline. Geniet met je voeten in het zand en een koptelefoon op van diverse films.",
        "website": "https://pllek.nl/films-with-a-view/",
        "ticketLink": "https://pllek.nl/agenda/",
        "imageUrl": "https://media.iamsterdam.com/w_907,h_514/71760w5du15s-pllek-8.webp",
        "imageGallery": [
            "https://outdoorcinema.nl/wp-content/uploads/2024/04/LOOK-OUT-3-9-van-95-e1689325680338-2-e1713877945687.jpg",
            "https://image.volkskrant.nl/109924345/feature-crop/1200/1200/lekker-chillen-en-genieten-van-een-filmpje-bij-pllek",
            "https://www.bartsboekje.com/wp-content/smush-webp/2024/07/Scherm%C2%ADafbeelding-2024-07-04-om-18.30.28-600x332.png.webp"
        ],
        "program": [
            { "date": "5 aug", "title": "The Adventures of Baron Munchausen", "imdb": "tt0096764" },
            { "date": "12 aug", "title": "La Chimera", "imdb": "tt14561712" },
            { "date": "19 aug", "title": "Amsterdam", "imdb": "tt10304142" },
            { "date": "26 aug", "title": "There Will Be Blood", "imdb": "tt0469494" }
        ],
        "extras": ["De vertoning is afhankelijk van het weer. Rond 13:00 op de dag zelf wordt gecommuniceerd of het doorgaat."]
    },
    {
        "id": "bijlmerbios",
        "title": "Bijlmerbios Openluchtbios",
        "period": "22, 23 aug & 13 sep",
        "month": ["august", "september"],
        "price": "free",
        "ticketPrice": "Gratis",
        "district": "Zuidoost",
        "startTime": "21:00",
        "languageDetails": { "spoken": "Nederlands/Engels", "subtitles": "Nederlands/Engels" },
        "location": "Diverse locaties in Amsterdam Zuidoost",
        "coords": { "latitude": 52.3198, "longitude": 4.9609 },
        "gmaps": "https://www.google.com/maps/search/?api=1&query=metrostation+Kraaiennest+amsterdam",
        "description": "Een unieke, gratis filmervaring op kenmerkende locaties in Amsterdam Zuidoost. De filmvertoningen worden omlijst door evenementen die de hele dag duren, zoals een Skate Board Jam en een Street Art Jam.",
        "website": "https://bijlmerbios.com/openluchtbios/",
        "ticketLink": null,
        "imageUrl": "https://app.thefeedfactory.nl/api/assets/665d8a955fbf84055a63e343/Bijlmerbios_2-__Hans_Mooren-Uitkrant.webp",
        "imageGallery": [
            "https://www.amsterdamsfondsvoordekunst.nl/site/assets/files/11155/bijlmerbios.1280x0.jpg",
            "https://bijlmerbios.com/wp-content/uploads/2019/07/Bijlmerbios-2017-4-%C2%A9-Bas-Bakkenes.jpg",
            "https://image.parool.nl/220825337/width/1280/de-bijlmerbios-in-zuidoost"
        ],
        "program": [
            { "date": "22 aug", "title": "One of Them Days", "imdb": null },
            { "date": "23 aug", "title": "Straatcoaches vs Aliens", "imdb": null },
            { "date": "13 sep", "title": "In the Heights", "imdb": "tt1319627" }
        ],
        "extras": ["De evenementen zijn volledig gratis toegankelijk.", "Er zijn uitgebreide voorprogramma's met o.a. skaten, street art en dans."]
    },
    {
        "id": "nemo",
        "title": "NEMO Film op het Dak",
        "period": "28 - 30 augustus 2025",
        "month": ["august"],
        "price": "paid",
        "ticketPrice": "€15",
        "district": "Centrum",
        "startTime": "21:00",
        "languageDetails": { "spoken": "Italiaans", "subtitles": "Engels" },
        "location": "Dakterras NEMO, Oosterdok 2, Amsterdam",
        "coords": { "latitude": 52.3745, "longitude": 4.9123 },
        "gmaps": "https://www.google.com/maps/search/?api=1&query=NEMO+Science+Museum+Amsterdam",
        "description": "Het vernieuwde dakterras van NEMO, ontworpen als een Italiaanse 'piazza', vormt het decor voor een speciaal filmweekend. Drie avonden lang worden hier Italiaanse filmklassiekers vertoond, met een spectaculair uitzicht over de stad.",
        "website": "https://www.nemosciencemuseum.nl/",
        "ticketLink": "https://www.nemosciencemuseum.nl/",
         "imageUrl": "https://cdn.sanity.io/images/49fr30wg/production/202a13df90aea98eeb3af744e79b2bf2227c6c2c-5657x3771.jpg?rect=0,295,5657,3182&w=1920&h=1080&fit=crop&auto=format",
        "imageGallery": [
            "https://image.parool.nl/234690342/width/1280/films-op-het-dak-bij-nemo-in-centrum",
            "https://www.amsterdamsdagblad.nl/image/55574_107098_1200_1200.webp",
            "https://verkeersbureaus.info/wp-content/uploads/2019/08/nemo-zomerdak-filmavond-2-foto-digidaan.jpg"
        ],
        "program": [
            { "date": "28 aug", "title": "La vita è bella", "imdb": "tt0118799" },
            { "date": "29 aug", "title": "Caro Diario", "imdb": "tt0109382" },
            { "date": "30 aug", "title": "Gloria!", "imdb": "tt29003323" }
        ],
        "extras": ["Geniet van een uniek uitzicht over de stad tijdens de film."]
    },
    {
        "id": "secret-garden",
        "title": "Secret Garden Cinema",
        "period": "22 aug - 13 sep 2025",
        "month": ["august", "september"],
        "price": "paid",
        "ticketPrice": "€12.50",
        "district": "Nieuw-West",
        "startTime": "21:00",
        "languageDetails": { "spoken": "Divers", "subtitles": "Engels" },
        "location": "Binnentuin Cinema de Vlugt, Amsterdam",
        "coords": { "latitude": 52.3792, "longitude": 4.8329 },
        "gmaps": "https://www.google.com/maps/search/?api=1&query=Cinema+de+Vlugt+Amsterdam",
        "description": "Een intieme openluchtbioscoop in de binnentuin van Cinema De Vlugt. Het programma richt zich op klassiekers uit Turkije, Iran, Egypte en Bollywood, wat een unieke kijkervaring biedt.",
        "website": "https://www.cinemadevlugt.nl/secretgardencinema/",
        "ticketLink": "https://www.cinemadevlugt.nl/secretgardencinema/",
        "imageUrl": "https://app.thefeedfactory.nl/api/assets/68626776df6f7f1272a67ec0/SC_CDV_2.webp",
        "imageGallery": [],
        "program": [
            { "date": "22 aug", "title": "Kabhi Khushi Kabhie Gham", "imdb": "tt0248126" },
            { "date": "23 aug", "title": "The Fish Fall in Love", "imdb": "tt0467597" },
            { "date": "29 aug", "title": "Fatma", "imdb": "tt0052806" },
            { "date": "30 aug", "title": "Hababam Sınıfı", "imdb": "tt0252487" }
        ],
        "extras": ["Richt zich specifiek op wereldcinema voor een unieke culturele ervaring."]
    },
    {
        "id": "cityscape-arena",
        "title": "Cityscape Cinema @ Hotel Arena",
        "period": "5 - 22 augustus 2025",
        "month": ["august"],
        "price": "paid",
        "ticketPrice": "€18.50",
        "district": "Oost",
        "startTime": "21:00 / 21:30",
        "languageDetails": { "spoken": "Engels", "subtitles": "Nederlands (indien aangegeven)" },
        "location": "Hotel Arena, 's-Gravesandestraat 55, Amsterdam",
        "coords": { "latitude": 52.3620, "longitude": 4.9155 },
        "gmaps": "https://www.google.com/maps/search/?api=1&query=Hotel+Arena+Amsterdam",
        "description": "Films op een unieke daklocatie met comfortabele zitplaatsen. Het programma omvat publieksfavorieten zoals romantische komedies, Disney, actie en sciencefiction.",
        "website": "https://cityscapecinema.com/",
        "ticketLink": "https://shop.ticketapp.com/hggzc",
        "imageUrl": "https://media.iamsterdam.com/w_907,h_514/6ed3afnxw1c5-untitled-design-3.webp",
        "imageGallery": [
            "https://cdn.prod.website-files.com/6572d6e8f828190dadefbcac/657322ac54a49db42228f80b_rooftop-movie-nights.webp",
            "https://hotelarena.nl/wp-content/uploads/Rooftop-Movie-Nights-Hotel-Arena-99-1200x1800.jpg"
        ],
        "program": [
            { "date": "5 aug", "title": "A Man Called Otto", "imdb": "tt7405458" },
            { "date": "6 aug", "title": "About a Boy", "imdb": "tt0276751" },
            { "date": "7 aug", "title": "The Devil Wears Prada", "imdb": "tt0458352" },
            { "date": "8 aug", "title": "Notting Hill", "imdb": "tt0125439" },
            { "date": "9 aug", "title": "La La Land", "imdb": "tt3783958" },
            { "date": "10 aug", "title": "Amélie", "imdb": "tt0211915" },
            { "date": "11 aug", "title": "Notting Hill", "imdb": "tt0125439" },
            { "date": "13 aug", "title": "The Terminal", "imdb": "tt0362227" },
            { "date": "14 aug", "title": "Bohemian Rhapsody", "imdb": "tt1727824" },
            { "date": "15 aug", "title": "Catch Me If You Can", "imdb": "tt0264464" },
            { "date": "16 aug", "title": "The Proposal", "imdb": "tt1041829" },
            { "date": "17 aug", "title": "Mrs. Doubtfire", "imdb": "tt0107614" },
            { "date": "18 aug", "title": "Midnight in Paris", "imdb": "tt1605783" },
            { "date": "19 aug", "title": "The Grand Budapest Hotel", "imdb": "tt2278388" },
            { "date": "20 aug", "title": "Life of Pi", "imdb": "tt0454876" },
            { "date": "21 aug", "title": "Green Book", "imdb": "tt6966692" },
            { "date": "22 aug", "title": "Mamma Mia!", "imdb": "tt0795421" }
        ],
        "extras": ["Ticketprijs is €17.50 excl. €1.00 service fee.", "Starttijd is 21:30 t/m 17 aug, daarna 21:00."]
    },
    {
        "id": "cityscape-leonardo",
        "title": "Cityscape Cinema @ Leonardo Rooftop",
        "period": "18 - 24 augustus 2025",
        "month": ["august"],
        "price": "paid",
        "ticketPrice": "€18.50",
        "district": "Nieuw-West",
        "startTime": "21:00",
        "languageDetails": { "spoken": "Engels", "subtitles": "Nederlands (indien aangegeven)" },
        "location": "Leonardo Hotel Rembrandtpark, Staalmeesterslaan 410, Amsterdam",
        "coords": { "latitude": 52.3615, "longitude": 4.8425 },
        "gmaps": "https://www.google.com/maps/search/?api=1&query=Leonardo+Hotel+Rembrandtpark",
        "description": "Films op een unieke daklocatie met comfortabele zitplaatsen en een prachtig uitzicht over de stad. Het programma omvat publieksfavorieten zoals romantische komedies, Disney, actie en sciencefiction.",
        "website": "https://cityscapecinema.com/",
        "ticketLink": "https://shop.ticketapp.com/hggzc",
        "imageUrl": "https://scontent.fein1-1.fna.fbcdn.net/v/t1.6435-9/119844250_2704961783048814_8035016743385143717_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zwMhh8yNBCgQ7kNvwFIlZ50&_nc_oc=AdlCcmTNhOCSJp8zOnn8vEAHhofiLuCaKid2ypErDGcg6yE-3FKgMB-E8nKVnCZk3lI&_nc_zt=23&_nc_ht=scontent.fein1-1.fna&_nc_gid=QC1QIqojeaZHtlZYtf0UoQ&oh=00_AfW1PGdAC93nM7GlDbgbccFQNOa3zg3-QU0amPFYbDmfXg&oe=68BD60E0",
        "imageGallery": [
            "https://vanduijnenhoreca.nl/wp-content/uploads/sites/2/2021/11/Floor17-rooftop-Amsterdam-e1714130528370.jpg",
            "https://www.yourlittleblackbook.me/wp-content/uploads/2017/08/openlucht-bioscopen-amsterdam-rooftop.jpg"
        ],
        "program": [
            { "date": "18 aug", "title": "Grease", "imdb": "tt0077631" },
            { "date": "19 aug", "title": "Life of Pi", "imdb": "tt0454876" },
            { "date": "20 aug", "title": "Midnight in Paris", "imdb": "tt1605783" },
            { "date": "21 aug", "title": "Interstellar", "imdb": "tt0816692" },
            { "date": "22 aug", "title": "Mean Girls", "imdb": "tt0377092" },
            { "date": "23 aug", "title": "Forrest Gump", "imdb": "tt0109830" },
            { "date": "24 aug", "title": "Bridget Jones's Diary", "imdb": "tt0243155" }
        ],
        "extras": ["Ticketprijs is €17.50 excl. €1.00 service fee."]
    },
    {
        "id": "sunsets-eye",
        "title": "Sunsets at EYE",
        "period": "Zomer 2025",
        "month": ["june", "july", "august"],
        "price": "free",
        "ticketPrice": "Gratis",
        "district": "Noord",
        "startTime": "22:00",
        "languageDetails": { "spoken": "Divers", "subtitles": "Engels" },
        "location": "Park naast het EYE Filmmuseum, IJpromenade 1, Amsterdam",
        "coords": { "latitude": 52.3847, "longitude": 4.9016 },
        "gmaps": "https://www.google.com/maps/search/?api=1&query=EYE+Filmmuseum+Amsterdam",
        "description": "Geniet van filmklassiekers en nieuwe ontdekkingen op een groot scherm in het park naast het iconische EYE Filmmuseum, met uitzicht op het IJ. Een perfecte zomeravond met vrienden.",
        "website": "https://www.eyefilm.nl/sunsets",
        "ticketLink": null,
        "imageUrl": "https://app.thefeedfactory.nl/api/assets/668fa028309aba0f1761b5d5/Sunsets_2023_credits_Jordi_Wallenburg__34_.jpg",
        "imageGallery": [
            "https://assets.eyefilm.nl/images/programme-item/_1200x630_crop_center-center_none/campagnebeeld-Sunsets-horizontaal.jpg",
            "https://likealocalguide.com/_next/image?url=https%3A%2F%2Fdirectus.likealocalguide.com%2Fassets%2F47798106-328c-4818-8a0f-b71049814125&w=3840&q=75",
            "https://www.bartsboekje.com/wp-content/smush-webp/2024/07/Scherm%C2%ADafbeelding-2024-07-04-om-17.56.42-600x420.png.webp"
        ],
        "program": [
            { "date": "Nog niet bekend", "title": "Programma wordt later aangekondigd", "imdb": null }
        ],
        "extras": ["Gratis toegang, neem je eigen kleedje mee."]
    },
    {
        "id": "moons-of-cavia",
        "title": "Moons of Cavia @ Filmhuis Cavia",
        "period": "28 - 31 augustus 2025",
        "month": ["august"],
        "price": "free",
        "ticketPrice": "Donatie (Cineville geldig)",
        "district": "West",
        "startTime": "20:00 (deuren open)",
        "languageDetails": { "spoken": "Divers", "subtitles": "Engels" },
        "location": "Tuin Filmhuis Cavia, Van Hallstraat 52, Amsterdam",
        "coords": { "latitude": 52.3781, "longitude": 4.8681 },
        "gmaps": "https://www.google.com/maps/search/?api=1&query=Van+Hallstraat+52+Amsterdam",
        "description": "Het kleinste filmhuis van Amsterdam gaat naar buiten! In de intieme tuin van Filmhuis Cavia geniet je van een eigenzinnig en verrassend programma onder de sterrenhemel. Een unieke, lokale filmervaring.",
        "website": "https://filmhuiscavia.nl/",
        "ticketLink": "https://filmhuiscavia.nl/programma/",
        "imageUrl": "https://www.filmhuiscavia.nl/application/files/2216/9020/8392/moons-2023-kaboom.jpg",
        "imageGallery": [
            "https://filmhuiscavia.nl/application/files/3916/9020/8393/moons-2023-zienema2.jpg",
            "https://filmhuiscavia.nl/application/files/2917/5371/1843/Moons-Poster-2025.png",
            "https://www.filmhuiscavia.nl/application/files/6816/2489/1421/binnentuin-kasparhauser_.jpg"
        ],
        "program": [
            { "date": "28-31 aug", "title": "Programma via de website", "imdb": null }
        ],
        "extras": ["Toegang op donatiebasis.", "Cinevillepas is geldig."]
    },
    {
        "id": "panorama-nights-lab111",
        "title": "Panorama Movie Nights @ Oedipus Craft Space",
        "period": "Woensdagen in juli & aug",
        "month": ["july", "august"],
        "price": "paid",
        "ticketPrice": "€8 (incl. biertje)",
        "district": "Noord",
        "startTime": "21:00",
        "languageDetails": { "spoken": "Engels", "subtitles": "Nederlands" },
        "location": "Oedipus Craft Space, Schaafstraat 21, Amsterdam",
        "coords": { "latitude": 52.3916, "longitude": 4.9221 },
        "gmaps": "https://www.google.com/maps/search/?api=1&query=Oedipus+Craft+Space+Schaafstraat+21+Amsterdam",
        "description": "LAB111 en Oedipus Brewing slaan de handen ineen voor Panorama Nights. Geniet van een gecureerde selectie films in de relaxte sfeer van de Oedipus Craft Space, inclusief een speciaal Panorama biertje.",
        "website": "https://www.lab111.nl/lab111-oedipus-brewing-present-panorama-movie-nights/",
        "ticketLink": "https://shop.lab111.nl/",
        "imageUrl": "https://oedipus.com/cdn/shop/files/IMG_8232.jpg?v=1752157019&width=750",
        "imageGallery": [
            "https://www.lab111.nl/wp-content/uploads/2025/07/image001.png",
            "https://www.yourlittleblackbook.me/wp-content/uploads/2024/10/Oedipus-Craft-Space-Amsterdam-3-marinachef-.jpg"
        ],
        "program": [
            { "date": "10 jul", "title": "Do the Right Thing", "imdb": "tt0097216" },
            { "date": "17 jul", "title": "Ghost In The Shell", "imdb": "tt0113568" },
            { "date": "24 jul", "title": "The Terminator", "imdb": "tt0088247" },
            { "date": "31 jul", "title": "Her", "imdb": "tt1798709" },
            { "date": "7 aug", "title": "Ex Machina", "imdb": "tt0470752" },
            { "date": "14 aug", "title": "When Harry Met Sally...", "imdb": "tt0098635" }
        ],
        "extras": ["Ticket is inclusief een Oedipus Panorama biertje.", "Samenwerking tussen LAB111 en Oedipus Brewing."]
    },
    {
        "id": "cinema-amstelveen-tour",
        "title": "Cinema Amstelveen on Tour",
        "period": "5, 6, 12 & 13 september",
        "month": ["september"],
        "price": "free",
        "ticketPrice": "Gratis (verwacht)",
        "district": "Zuid",
        "startTime": "20:30",
        "languageDetails": { "spoken": "Nederlands/Engels", "subtitles": "Nederlands" },
        "location": "Diverse locaties in Amstelveen",
        "coords": { "latitude": 52.3023, "longitude": 4.8453 },
        "gmaps": "https://www.google.com/maps/search/?api=1&query=Schouwburg+Amstelveen",
        "description": "Cinema Amstelveen trekt eropuit! Geniet van gratis filmvertoningen op verschillende pleinen in Amstelveen, zoals het Stadsplein en het plein bij Theater De Landing. Een gezellig filmevenement voor de hele buurt.",
        "website": "https://schouwburgamstelveen.nl/nl/pinfo/2324090/cinema-on-tour",
        "ticketLink": null,
        "imageUrl": "https://www.mijnamstelveen.nl/current/local/runtime/images/17410/1120x630/IMG_1462.jpeg",
        "imageGallery": [
            "https://schouwburgamstelveen.nl/media/dx5nff2v/photo-2023-06-30-22-21-58.jpg?anchor=center&mode=crop&width=1436&height=802&rnd=133346681547670000",
            "https://schouwburgamstelveen.nl/media/4c2oqzya/photo-2023-06-30-22-21-55.jpg"
        ],
        "program": [
            { "date": "5 & 6 sep", "title": "Programma volgt (Stadsplein)" },
            { "date": "12 & 13 sep", "title": "Programma volgt (De Landing)" }
        ],
        "extras": ["Gratis toegang.", "Locaties: Stadsplein (5 & 6 sep) en plein bij Theater De Landing (12 & 13 sep)."]
    }
];

        // --- LOGIC: script.js ---
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
                                    ${p.details ? `<div class="program-details">${p.details.year} &bull; ${p.details.genres.join(', ')} &bull; ${p.details.duration} min</div>` : ''}
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
                        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
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
    </script>
</body>
</html>
