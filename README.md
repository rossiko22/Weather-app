# Weather Forecast Application 🌦️

This project is a weather forecast web application that allows users to view current weather conditions and a 4-day forecast for any city worldwide. Built using HTML, CSS, and TypeScript, it integrates the OpenWeatherMap API to fetch real-time weather data.

## Features

- **Search by City**: Enter any city's name to get current weather data.
- **Weather Details**: 
  - Current temperature, weather condition, and "feels like" temperature.
  - Maximum and minimum temperatures.
- **4-Day Forecast**: View the weather predictions for the next four days.
- **Interactive UI**: 
  - Gradient-based card design.
  - Dynamic icons and flag integration for a clean, informative layout.
- **Responsive Design**: Optimized for desktops and mobile devices.

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **TypeScript**: For structured and type-safe JavaScript code.
- **Backend**: Node.js for serving files
- **API Integration**: [OpenWeatherMap API](https://openweathermap.org/api)

---

## Project Structure

```plaintext
├── dist/                 # Compiled JavaScript files
│   ├── api.js
│   ├── functions.js
│   ├── interfaces.js
│   └── test.js
├── images/               # Weather-related images
│   ├── clear-day.png
│   ├── cloudy.png
│   ├── cloudyhouse.png
│   ├── habitat.png
│   ├── rainy.png
│   ├── rainyhouse.png
│   ├── snowy.png
│   ├── snowyhouse.png
│   ├── staracloudy.png
│   └── sun.png
├── node_modules/         # Dependencies (managed by npm)
├── public/               # HTML and CSS files
│   ├── index.html        # Main HTML file
│   └── style.css         # Styling for the app
├── src/                  # TypeScript source files
│   ├── api.ts
│   ├── functions.ts
│   ├── interfaces.ts
│   └── test.ts
├── package.json          # Node.js project metadata
├── package-lock.json     # Lockfile for npm dependencies
├── tsconfig.json         # TypeScript configuration
├── index.js              # Node.js server file
└── README.md             # Project documentation
