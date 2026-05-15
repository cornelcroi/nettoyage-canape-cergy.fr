# Website Plan: nettoyage-canape-cergy.fr

## Objective

Launch a mobile-first static website to validate search demand and lead intent for "nettoyage canape Cergy" before signing an artisan partner.

The first version should prove:

- Google can index the site.
- The domain receives impressions for local cleaning keywords.
- Visitors click CTA buttons or submit quote requests.
- The collected demand is strong enough to approach local service providers.

## Scope

Build a small static site:

- `/` main landing page
- `/merci.html` thank-you page
- `/mentions-legales.html` legal notice
- `/politique-confidentialite.html` privacy policy
- `/robots.txt`
- `/sitemap.xml`

No CMS, database, dynamic server rendering, or runtime page generation for the MVP.

## Positioning

The site should not pretend to be an established cleaning company.

Use transparent lead-capture language:

- "Demandez une estimation gratuite."
- "Nous vous aidons a trouver une solution adaptee."
- "Intervention selon disponibilite des prestataires locaux."

Avoid:

- fake reviews
- fake company history
- fake team photos
- guaranteed intervention promises

## Mobile-First UX

Most users will arrive from Google on a phone. The page must prioritize:

- fast loading
- short hero copy
- large tap targets
- sticky bottom CTA bar
- visible quote form
- simple service explanations
- FAQ for search intent
- no heavy JavaScript

## Homepage Sections

1. Hero
   - H1: "Nettoyage canape a Cergy"
   - CTA to quote form
   - Trust notes: demande gratuite, reponse rapide, Cergy et alentours

2. Services
   - canape tissu
   - canape d'angle
   - fauteuil
   - matelas
   - tapis
   - sieges auto

3. How it works
   - describe the need
   - receive an estimate
   - organize an intervention if possible

4. Local SEO area
   - Cergy
   - Cergy-Prefecture
   - Cergy-Saint-Christophe
   - Cergy-le-Haut
   - Pontoise
   - Osny
   - Eragny
   - Vaureal
   - Saint-Ouen-l'Aumone

5. FAQ
   - price
   - at-home service
   - drying time
   - stain and odor cleaning
   - surrounding cities

6. Lead form
   - first name
   - phone
   - city
   - item type
   - preferred contact method
   - message

## Tracking

Add event hooks for:

- quote CTA clicks
- form submissions
- contact preference clicks
- thank-you page visits

Analytics IDs can be added later once GA4 or Plausible is chosen.

## Launch Checklist

- Register `nettoyage-canape-cergy.fr`
- Deploy static files
- Configure HTTPS
- Connect real form endpoint
- Add analytics
- Verify Google Search Console
- Submit sitemap
- Test mobile layout
- Test form submission

