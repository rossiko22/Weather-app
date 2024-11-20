
# Weather Forecast Application 🌦️

This project is a weather forecast web application that allows users to view current weather conditions and a 4-day forecast for any city worldwide. Built using HTML, CSS, and TypeScript, it integrates the OpenWeatherMap API to fetch real-time weather data.

---

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

---

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **TypeScript**: For structured and type-safe JavaScript code.
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
└── README.md             # Project documentation
```

---

## How to Run

Follow the steps below to set up and run the project:

### Step 1: Clone the Repository

Clone the project repository to your local machine:

```bash
git clone https://github.com/your-username/your-repo-name.git
```

---

### Step 2: Navigate to the Project Directory

Move into the directory of the cloned project:

```bash
cd your-repo-name
```

---

### Step 3: Install Dependencies

Install all required dependencies by running:

```bash
npm install
```

---

### Step 4: Set Up Your API Key

1. Obtain your API key from the [OpenWeatherMap API](https://openweathermap.org/api).
2. Open the `src/api.ts` file in your code editor.
3. Replace the placeholder `"your-api-key"` with your actual API key:

   ```typescript
   export const apiKey = "your-api-key";
   ```

---

### Step 5: Install TypeScript Compiler

Before compiling TypeScript, make sure you have the TypeScript compiler installed.

You can install it globally using npm:

```bash
npm install -g typescript
```

Or, you can install it locally in the project:

```bash
npm install --save-dev typescript
```

---

### Step 6: Compile TypeScript

From the root directory of the project, compile the TypeScript code into JavaScript:

```bash
tsc
```

---

### Step 7: Open the Application in VS Code

1. Open the `index.html` file in your VS Code editor.
2. Use the **Live Server extension** in VS Code to launch the app by right-clicking on `index.html` and selecting **"Open with Live Server"**.

---

### Step 8: View the App

Your application will now be available in your browser at:

- [http://127.0.0.1:5500](http://127.0.0.1:5500)  
- Or the URL provided by Live Server.

---

## Contributing

Contributions are welcome! Feel free to fork this repository, make enhancements, and submit a pull request.

---

## License

This project is licensed under the MIT License.
