# 🌤️ Weather App
Just a simple weather app I made while learning how to use APIs in React. You can search for any city and it shows you the current weather.

### Key Features

- 🔍 **City Search**

  - Search for any city worldwide
  - Real-time weather data fetching
  - Error handling for invalid city names

- 🌡️ **Weather Information**

  - Current temperature (in Celsius)
  - Atmospheric pressure (in atm)
  - Visibility distance (in km)
  - Humidity percentage
  - Cloud coverage percentage


- 🎨 **Dynamic UI**

  - Background color changes based on temperature
  - Cold (< 10°C): Light blue
  - Moderate (10-30°C): Yellow
  - Hot (> 30°C): Red/Orange gradient


## 📘 Technical Details

- Framework: React 18.2.0
- API: OpenWeatherMap API
- Styling: CSS3 with gradients and box shadows
- State Management: React Hooks (useState, useEffect)

## 🏗️ Project Structure
```
application/
│
├── src/
│   ├── Components/
│   │   ├── Header.js          # App header component
│   │   ├── InputCity.js       # Search input component
│   │   └── ShowWeather.js     # Weather display component
│   │
│   ├── App.js                 # Main app logic & API calls
│   ├── index.js               # React DOM renderer
│   └── styles.css             # All styling
│
├── public/
│   ├── index.html
│   └── manifest.json
│
└── package.json
```

## ⚙️ Installation

1. Clone or download this repository
2. Navigate to the application directory:
  bash   cd application
3. Install dependencies:
  bash   npm install
4. Get a free API key from [OpenWeatherMap](https://openweathermap.org/api)
5. Add your API key to src/App.js (line 23)
6. Start the development server:
  bash   npm start
7. Open your browser and go to http://localhost:3000

## 📜 License
This project is open source and available for educational purposes.
