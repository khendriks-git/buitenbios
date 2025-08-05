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
const events = [
    {
        "id": "hart-museum",
        "title": "Movies at H'ART Museum",
        "period": "6 - 26 augustus 2025",
        "month": ["august"],
        "price": "paid",
        "language": "EN/NL",
        "district": "Centrum",
        "location": "Binnentuin H'ART Museum, Nieuwe Keizersgracht 1, Amsterdam",
        "coords": { "latitude": 52.3639, "longitude": 4.9022 },
        "gmaps": "https://www.google.com/maps/search/?api=1&query=H'ART+Museum+Amsterdam",
        "description": "De grootste openluchtbioscoop van Amsterdam, gesitueerd in de majestueuze en sfeervolle binnentuin van het H'ART Museum. De sfeer is romantisch en stijlvol, perfect voor een avond wegdromen bij geliefde filmklassiekers. Elke voorstelling begint met een legendarische filmquiz en een korte inleiding.",
        "website": "https://www.hartmuseum.nl/activiteiten/movies-hart-museum/",
        "ticketLink": "https://www.moviesathartmuseum.nl/tickets/",
        "socials": {},
        "program": [
            { "date": "6 aug", "title": "Vicky Christina Barcelona", "imdb": "tt0497465" },
            { "date": "7 aug", "title": "Fantastic Mr. Fox", "imdb": "tt0432283" },
            { "date": "8 aug", "title": "10 Things I Hate About You", "imdb": "tt0147800" },
            { "date": "9 aug", "title": "Kneecap", "imdb": "tt27552979" },
            { "date": "10 aug", "title": "Lost in Translation", "imdb": "tt0335266" },
            { "date": "11 aug", "title": "On the Road (Art Movie Monday)", "imdb": "tt0337692" },
            { "date": "12 aug", "title": "Vingt Dieux", "imdb": "tt30806509" },
            { "date": "13 aug", "title": "Up", "imdb": "tt1049413" },
            { "date": "14 aug", "title": "Dirty Dancing", "imdb": "tt0092890" },
            { "date": "15 aug", "title": "Ja Zuster, Nee Zuster (Sing-a-Long)", "imdb": "tt0273798" },
            { "date": "16 aug", "title": "Challengers", "imdb": "tt16426418" },
            { "date": "17 aug", "title": "Perfect Days", "imdb": "tt27503384" },
            { "date": "18 aug", "title": "7 Years in Tibet (Art Movie Monday)", "imdb": "tt0120102" },
            { "date": "20 aug", "title": "Do the Right Thing", "imdb": "tt0097216" },
            { "date": "21 aug", "title": "No Country for Old Men", "imdb": "tt0477348" },
            { "date": "22 aug", "title": "The Secret Life of Walter Mitty", "imdb": "tt0359950" },
            { "date": "23 aug", "title": "Top Gun: Maverick", "imdb": "tt1745960" },
            { "date": "24 aug", "title": "Monsieur Aznavour", "imdb": "tt15722138" },
            { "date": "25 aug", "title": "Into the Wild (Art Movie Monday)", "imdb": "tt0758758" },
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
        "language": "EN",
        "district": "West",
        "location": "Het Stenen Hoofd, Westerdoksdijk, Amsterdam",
        "coords": { "latitude": 52.3863, "longitude": 4.8880 },
        "gmaps": "https://www.google.com/maps/search/?api=1&query=Stenen+Hoofd+Amsterdam",
        "description": "Het belangrijkste onafhankelijke openluchtfilmfestival van Nederland op een rauwe, industriële stadspier aan het IJ. De programmering is tegendraads en richt zich op films (speelfilms, docu's, shorts) die de reguliere bioscoop vaak niet halen.",
        "website": "https://plukdenacht.nl/",
        "ticketLink": "https://plukdenacht.nl/",
        "socials": {
            "instagram": "https://www.instagram.com/plukfilmfestival/"
        },
        "program": [
            { "date": "Hoofdprogramma", "title": "Wordt kort voor aanvang bekendgemaakt op de website.", "imdb": null },
            { "date": "22 aug (Pluktent)", "title": "Life of Pi", "imdb": "tt0454876" },
            { "date": "23 aug (Pluktent)", "title": "The Life Aquatic with Steve Zissou", "imdb": "tt0362270" },
            { "date": "29 aug (Pluktent)", "title": "Billy Elliot", "imdb": "tt0249462" },
            { "date": "30 aug (Pluktent)", "title": "Little Miss Sunshine", "imdb": "tt0449059" }
        ],
        "extras": ["Terrein is gratis toegankelijk, je betaalt voor een strandstoel.", "Na de film is er 'De Stille Nachtclub' om te dansen.", "Op 24 aug is er een gratis kindereditie: Pluk MINI."]
    },
    {
        "id": "west-beach",
        "title": "West Beach Film Festival",
        "period": "17 - 21 september 2025",
        "month": ["september"],
        "price": "free",
        "language": "EN/NL",
        "district": "Nieuw-West",
        "location": "Buurtwerkplaats Noorderhof, Sloterplas",
        "coords": { "latitude": 52.3687, "longitude": 4.8037 },
        "gmaps": "https://www.google.com/maps/search/?api=1&query=Buurtwerkplaats+Noorderhof+Sloterplas",
        "description": "Een gratis, vijfdaags evenement aan de oevers van de Sloterplas. Meer dan alleen film; een viering van de buurt met muziek, kunst, workshops en gezamenlijke maaltijden. Het thema voor 2025 is 'HABITAT'.",
        "website": "https://westbeachfilmfestival.com/",
        "ticketLink": null,
        "socials": {
            "instagram": "https://www.instagram.com/westbeachfilmfestival/"
        },
        "program": [
            { "date": "17 sep (20:30)", "title": "Anora", "imdb": "tt29298482" },
            { "date": "18 sep (20:45)", "title": "Sweet Dreams", "imdb": "tt21223406" },
            { "date": "19 sep (20:45)", "title": "Skyfall", "imdb": "tt1074638" },
            { "date": "20 sep (20:30)", "title": "Paddington in Peru", "imdb": "tt2262245" },
            { "date": "21 sep (21:00)", "title": "Time of the Gypsies", "imdb": "tt0097223" }
        ],
        "extras": ["Toegang is gratis (pay-as-you-like).", "Vaak vergezeld van live DJ-sets en workshops."]
    },
    {
        "id": "cinetree",
        "title": "Cinetree Forest Film Festival",
        "period": "14 - 17 augustus 2025",
        "month": ["august"],
        "price": "paid",
        "language": "EN",
        "district": "Zuid",
        "location": "Amsterdamse Bostheater, Amsterdamse Bos",
        "coords": { "latitude": 52.3297, "longitude": 4.8385 },
        "gmaps": "https://www.google.com/maps/search/?api=1&query=Amsterdamse+Bostheater",
        "description": "Een magische filmervaring in het Amsterdamse Bostheater. Het festival combineert filmvertoningen onder de sterrenhemel met muziek, poëzie en inleidingen van experts voor een diepere beleving.",
        "website": "https://bostheater.nl/ons-programma/cinetree/",
        "ticketLink": "https://bostheater.nl/ons-programma/cinetree/",
        "socials": {},
        "program": [
            { "date": "14 aug", "title": "The Salt Path", "imdb": "tt13632948" },
            { "date": "15 aug", "title": "Do The Right Thing", "imdb": "tt0097216" },
            { "date": "16 aug", "title": "Lion", "imdb": "tt3741834" },
            { "date": "17 aug", "title": "Flow (Cinetree Dog Night)", "imdb": "tt22513420" }
        ],
        "extras": ["Op 17 augustus is de 'Cinetree Dog Night', honden zijn dan welkom!", "Niet te verwarren met 'Bosbios', wat in Hilversum plaatsvindt."]
    },
     {
        "id": "pllek",
        "title": "Films with a View bij Pllek",
        "period": "Elke dinsdag t/m september",
        "month": ["august", "september"],
        "price": "paid",
        "language": "EN",
        "district": "Noord",
        "location": "Pllek, NDSM-werf, Amsterdam",
        "coords": { "latitude": 52.3992, "longitude": 4.8931 },
        "gmaps": "https://www.google.com/maps/search/?api=1&query=Pllek+Amsterdam",
        "description": "Elke dinsdagavond transformeert het stadsstrand aan de NDSM-werf in een bioscoop met een adembenemend uitzicht op de skyline. Geniet met je voeten in het zand en een koptelefoon op van diverse films.",
        "website": "https://pllek.nl/films-with-a-view/",
        "ticketLink": "https://pllek.nl/agenda/",
        "socials": {},
        "program": [
            { "date": "5 aug", "title": "The Adventures of Baron Munchausen", "imdb": "tt0096764" },
            { "date": "12 aug", "title": "La Chimera", "imdb": "tt14561712" },
            { "date": "19 aug", "title": "Amsterdam", "imdb": "tt10304142" },
            { "date": "26 aug", "title": "There Will Be Blood", "imdb": "tt0469494" },
            { "date": "Sep", "title": "Programma voor september wordt later bekendgemaakt.", "imdb": null }
        ],
        "extras": ["De vertoning is afhankelijk van het weer. Rond 13:00 op de dag zelf wordt gecommuniceerd of het doorgaat."]
    },
    {
        "id": "bijlmerbios",
        "title": "Bijlmerbios Openlucht",
        "period": "22, 23 aug & 13 sep",
        "month": ["august", "september"],
        "price": "free",
        "language": "NL",
        "district": "Zuidoost",
        "location": "Diverse locaties in Amsterdam Zuidoost",
        "coords": { "latitude": 52.3198, "longitude": 4.9609 },
        "gmaps": "https://www.google.com/maps/search/?api=1&query=metrostation+Kraaiennest+amsterdam",
        "description": "Een unieke, gratis filmervaring op kenmerkende locaties in Amsterdam Zuidoost. De filmvertoningen worden omlijst door evenementen die de hele dag duren, zoals een Skate Board Jam en een Street Art Jam.",
        "website": "https://bijlmerbios.com/openluchtbios/",
        "ticketLink": null,
        "socials": {},
        "program": [
            { "date": "22 aug (Kraaiennest)", "title": "One of Them Days", "imdb": null },
            { "date": "23 aug (Kraaiennest)", "title": "Straatcoaches vs Aliens", "imdb": null },
            { "date": "13 sep (A'damse Poort)", "title": "In the Heights", "imdb": "tt1319627" }
        ],
        "extras": ["De evenementen zijn volledig gratis toegankelijk.", "Er zijn uitgebreide voorprogramma's met o.a. skaten, street art en dans."]
    },
    {
        "id": "nemo",
        "title": "Italiaans Filmweekend NEMO",
        "period": "28 - 30 augustus 2025",
        "month": ["august"],
        "price": "paid",
        "language": "EN",
        "district": "Centrum",
        "location": "Dakterras NEMO, Oosterdok 2, Amsterdam",
        "coords": { "latitude": 52.3745, "longitude": 4.9123 },
        "gmaps": "https://www.google.com/maps/search/?api=1&query=NEMO+Science+Museum+Amsterdam",
        "description": "Het vernieuwde dakterras van NEMO, ontworpen als een Italiaanse 'piazza', vormt het decor voor een speciaal filmweekend. Drie avonden lang worden hier Italiaanse filmklassiekers vertoond, met een spectaculair uitzicht over de stad.",
        "website": "https://www.nemosciencemuseum.nl/",
        "ticketLink": "https://www.nemosciencemuseum.nl/",
        "socials": {},
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
        "language": "EN",
        "district": "Nieuw-West",
        "location": "Binnentuin Cinema de Vlugt, Amsterdam",
        "coords": { "latitude": 52.3792, "longitude": 4.8329 },
        "gmaps": "https://www.google.com/maps/search/?api=1&query=Cinema+de+Vlugt+Amsterdam",
        "description": "Een intieme openluchtbioscoop in de binnentuin van Cinema De Vlugt. Het programma richt zich op klassiekers uit Turkije, Iran, Egypte en Bollywood, wat een unieke kijkervaring biedt.",
        "website": "https://www.cinemadevlugt.nl/secretgardencinema/",
        "ticketLink": "https://www.cinemadevlugt.nl/secretgardencinema/",
        "socials": {},
        "program": [
            { "date": "22 aug", "title": "Kabhi Khushi Kabhie Gham", "imdb": "tt0248126" },
            { "date": "23 aug", "title": "The Fish Fall in Love", "imdb": "tt0467597" },
            { "date": "29 aug", "title": "Fatma", "imdb": "tt0052806" },
            { "date": "30 aug", "title": "Hababam Sınıfı", "imdb": "tt0252487" }
        ],
        "extras": ["Richt zich specifiek op wereldcinema voor een unieke culturele ervaring."]
    }
];
