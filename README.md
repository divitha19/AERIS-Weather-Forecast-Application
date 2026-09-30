# 🌤️ Weather Forecasting

A responsive weather forecasting web application that provides real-time weather information and a 5-day forecast based on a searched city or the user's current location.

---

# ✨ Features

* 🔍 Search weather by city
* 📍 Detect weather using current location
* 🌡️ Display current temperature and weather conditions
* 💧 Show humidity and wind speed
* 📅 5-day weather forecast
* 📱 Responsive design for different devices
* ⚡ Real-time weather data
* ❌ Handles invalid searches and location errors

---

# 🛠️ Technologies Used

| Technology          | Purpose                                                              |
| ------------------- | -------------------------------------------------------------------- |
| **HTML5**           | Creates the structure of the web application                         |
| **CSS3**            | Provides styling, layout, and responsive design                      |
| **JavaScript**      | Handles application logic, API requests, and dynamic webpage updates |
| **Python**          | Used for backend development                                         |
| **Flask**           | Provides the Python backend                                          |
| **Open-Meteo API**  | Provides weather and location information                            |
| **Geolocation API** | Obtains the user's current geographical location                     |
| **Git & GitHub**    | Version control and project hosting                                  |

---

# 📂 Project Structure

```text
Weather-Forecasting/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── backend/
│   ├── app.py
│   └── requirements.txt
│
└── README.md
```

---

# 📄 File Description

## 📄 index.html

The **index.html** file contains the main structure of the weather forecasting application.

It contains:

* Application title
* City search box
* Search button
* Current location button
* Current weather section
* Temperature display
* Humidity information
* Wind information
* 5-day forecast section

It acts as the **main webpage that users interact with**.

## 🎨 css/style.css

The **style.css** file controls the visual appearance of the application.

It is responsible for:

* Page layout
* Colors
* Fonts
* Spacing
* Weather cards
* Buttons
* Search area
* Forecast cards
* Responsive design
* Mobile layouts
* Visual effects and animations

## ⚙️ js/script.js

The **script.js** file contains the main application logic.

It is responsible for:

* Reading the city entered by the user
* Sending API requests
* Processing API responses
* Displaying current weather
* Generating the 5-day forecast
* Handling the current-location feature
* Using the browser Geolocation API
* Updating webpage elements dynamically
* Handling errors and invalid searches

## 🐍 backend/app.py

The **app.py** file contains the Python Flask backend.

It is responsible for:

* Starting the Flask server
* Receiving weather requests
* Processing city names
* Obtaining geographical coordinates
* Requesting weather information
* Returning weather information as JSON

## 📦 backend/requirements.txt

The **requirements.txt** file contains the Python packages required by the Flask backend.

Example:

```text
Flask
requests
```

## 📖 README.md

The **README.md** file contains the complete documentation of the project, including its features, technologies, structure, workflow, API usage, and future improvements.

---

# 🔄 How It Works

The application follows several steps to convert a **city name or geographical location** into useful weather information.

```text
User
  ↓
City Search / Current Location
  ↓
Location Information
  ↓
Latitude & Longitude
  ↓
Weather API Request
  ↓
Weather Data
  ↓
JavaScript Processing
  ↓
Weather Dashboard
```

## 1. 🔍 City Search

The user enters a city name into the search box.

For example:

**Hyderabad**

JavaScript reads the city name and sends it to the **Open-Meteo Geocoding API**.

The API finds the requested location and returns:

* City name
* Country
* Latitude
* Longitude

## 2. 🌍 Finding the Location

The application uses the latitude and longitude obtained from the geocoding service to identify the exact location for the weather request.

**City Name → Geocoding API → Latitude & Longitude**

## 3. 🌦️ Requesting Weather Data

After obtaining the coordinates, the application sends them to the weather service.

The weather service returns:

* Temperature
* Humidity
* Wind speed
* Weather condition
* Forecast data

## 4. 📦 Receiving API Response

The weather service returns information in **JSON format**.

Example:

```json
{
  "temperature": 28,
  "humidity": 65,
  "wind_speed": 12
}
```

JavaScript receives the response and extracts the required information.

## 5. ⚙️ Processing Weather Data

```text
API Response
     ↓
Extract Weather Information
     ↓
Process Temperature
     ↓
Process Humidity
     ↓
Process Wind Speed
     ↓
Process Weather Condition
     ↓
Update Webpage
```

## 6. 🖥️ Displaying Weather

The processed information is displayed:

* **Location**
* **Current temperature**
* **Weather condition**
* **Humidity**
* **Wind speed**

The webpage updates dynamically without requiring a manual refresh.

---

# 📍 How the Current Location Feature Works

When the user clicks **My Location**, the browser's **Geolocation API** is used.

If permission is granted, the browser provides:

* Latitude
* Longitude

These coordinates are then used to retrieve weather information.

```text
User clicks "My Location"
          ↓
Browser requests permission
          ↓
User allows location access
          ↓
Latitude & Longitude obtained
          ↓
Weather API request
          ↓
Weather information received
          ↓
Weather displayed
```

---

# 📅 How the 5-Day Forecast Works

The application provides weather information for the upcoming five days.

The weather API provides forecast information, which is processed by JavaScript and displayed as individual forecast cards.

Each forecast card can contain:

* **Date**
* **Weather condition**
* **Temperature**
* **Other available weather information**

```text
Weather API
     ↓
Forecast Data
     ↓
JavaScript Processing
     ↓
Select Required Information
     ↓
Create Forecast Cards
     ↓
Display Forecast
```

---

# 🐍 How the Flask Backend Works

The project includes a **Python Flask backend** that acts as a server-side layer for weather requests.

```text
Frontend
    ↓
Flask Backend
    ↓
Weather API
    ↓
Flask Backend
    ↓
JSON Response
    ↓
Frontend
```

The backend can:

1. Receive the city name
2. Process the request
3. Find geographical coordinates
4. Request weather information
5. Process the API response
6. Return the result as JSON

---

# 🔌 Backend API

The Flask backend provides a weather endpoint:

**`/weather?city=Hyderabad`**

The city name is provided as a query parameter.

The backend processes the city name, retrieves the required weather information, and returns the result in **JSON format**.

---

# 🌐 API Used

## ☁️ Open-Meteo

The application uses **Open-Meteo** for weather and geographical information.

It is used for:

* City geocoding
* Latitude and longitude
* Current weather
* Forecast information
* Location-based weather data

The basic API requests used by this project do not require a personal API key.

---

# 🔐 API Key

This project uses **Open-Meteo**, which does not require a traditional API key for the basic weather requests used by the application.

---

# ⚠️ Error Handling

The application can handle common situations such as:

* Empty city search
* Invalid city names
* City not found
* Network errors
* Weather API errors
* Location permission denied
* Location unavailable

Appropriate messages can be displayed to help users understand the problem.

---

# 🎯 Project Objectives

The main objectives of this project are:

* Build a functional weather forecasting application
* Practice frontend web development
* Understand API integration
* Work with JSON data
* Implement browser geolocation
* Develop a Python Flask backend
* Understand frontend-backend communication
* Build a responsive user interface
* Practice real-world project organization
* Create professional project documentation

---

# 📚 Concepts Demonstrated

## 💻 Frontend Development

* HTML5
* CSS3
* JavaScript
* DOM manipulation
* Responsive web design

## 🐍 Backend Development

* Python
* Flask
* HTTP requests
* API endpoints
* Query parameters
* JSON responses

## 🔗 API Integration

* Geocoding
* Weather APIs
* JSON data processing
* Dynamic data retrieval

## 🌍 Browser Technologies

* Geolocation API
* Location permissions

## 🛠️ Development Practices

* Git
* GitHub
* Project organization
* Documentation
* Responsive design

---

# 🧪 Example Usage

Suppose the user searches for:

**Hyderabad**

The application follows this process:

```text
User enters "Hyderabad"
          ↓
Application receives city name
          ↓
Geocoding API finds Hyderabad
          ↓
Latitude & Longitude obtained
          ↓
Weather API is requested
          ↓
Weather data is returned
          ↓
JavaScript processes the response
          ↓
Current weather is displayed
          ↓
5-Day forecast is displayed
```

---


