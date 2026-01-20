# VueApexCharts

Vue diagram för betyg & Väder

Detta är ett enkelt projekt i Vue 3 som visar hur man:
visualiserar data i linjediagram med ApexCharts
hämtar och visar väderdata från Open‑Meteo
växlar mellan vyer utan Vue Router

Funktioner:
Betygssidan visar betyg/data i ett linjediagram

Vädersidan hämtar temperaturdata från Open‑Meteo och visar i diagram

Den använder Vue 3, Vite, ApexCharts och Open‑Meteo API (ingen API‑nyckel krävs)

Kom igång lokalt

1 Klona projektet
git clone <repo-url> cd <projektmapp>
2 Installera beroenden  
npm install
3 Starta utvecklingsservern  
npm run dev

Öppna sedan webbläsaren på den adress som visas i terminalen, oftast http://localhost:5173

Applikationen använder ingen Vue Router.
App.vue håller reda på vilken vy som visas
ChartView och WeatherView skickar events för att byta vy
Väderdata hämtas från https://open-meteo.com/

öjliga vidareutvecklingar: lägga till fler dataserier, använda Vue Router, välja stad via formulär
