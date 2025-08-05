# Buitenbios Amsterdam 2025 - Website

Dit project bevat alle bestanden voor de website "Buitenbios Amsterdam 2025". De site is ontworpen om lichtgewicht, snel, SEO-geoptimaliseerd en uiterst eenvoudig aanpasbaar te zijn.

## Projectstructuur

/|-- index.html         (De hoofdstructuur van de pagina)|-- style.css          (Alle vormgeving en layout)|-- script.js          (De interactieve logica en filters)|-- events.js          (De 'database' met alle evenementinformatie)|-- /assets/|   |-- favicon.ico|   |-- location-pin.svg|   |-- imdb-logo.svg|-- README.md          (Dit bestand)
## Hoe de website te deployen via Netlify

Netlify is een gratis en zeer eenvoudige manier om deze website live te zetten. Het is een kwestie van slepen en neerzetten.

1.  **Maak een ZIP-bestand**: Comprimeer de hele projectmap (met daarin `index.html`, `style.css`, etc.) tot één `.zip`-bestand.
2.  **Ga naar Netlify**: Maak een gratis account aan op [https://www.netlify.com/](https://www.netlify.com/).
3.  **Deploy de site**:
    * Log in op je Netlify-account.
    * Ga naar het "Sites" overzicht.
    * Sleep je `.zip`-bestand naar het aangegeven veld ("Drag and drop your site folder here").
4.  **Klaar!** Netlify pakt het bestand uit, deployt de site en geeft je een unieke URL (bijv. `unieke-naam-123.netlify.app`). Je website is nu live!

Je kunt de naam van de site later aanpassen via "Site settings" -> "Change site name".

## Hoe de evenementen aan te passen

Dit is het krachtigste onderdeel van de site. **Je hoeft geen HTML of complexe code aan te raken.** Alle informatie staat in één overzichtelijk bestand: `events.js`.

1.  **Open `events.js`**: Open dit bestand in een simpele teksteditor (zoals Notepad, TextEdit, of VS Code).
2.  **Wijzig een evenement**: Zoek het evenement op in de lijst en pas de velden aan. Bijvoorbeeld, om een filmtitel te veranderen, wijzig je de `title` binnen de `program` array.
3.  **Voeg een evenement toe**: Kopieer een volledig evenement-object (alles van `{` tot en met de bijbehorende `}`), plak dit aan het einde van de lijst (maar wel binnen de `[` en `]` van de `events` array), en pas alle informatie aan. **Vergeet niet een unieke `id` te geven!**
4.  **Verwijder een evenement**: Selecteer en verwijder het volledige object van het evenement dat je wilt weghalen.

Nadat je wijzigingen hebt opgeslagen in `events.js`, maak je een nieuw ZIP-bestand en sleep je dit opnieuw naar Netlify om de live site bij te werken.
