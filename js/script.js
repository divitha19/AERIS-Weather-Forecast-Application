const weatherCodes = {
    0: "☀️ Clear Sky",
    1: "🌤️ Mainly Clear",
    2: "⛅ Partly Cloudy",
    3: "☁️ Overcast",
    45: "🌫️ Fog",
    48: "🌫️ Depositing Rime Fog",
    51: "🌦️ Light Drizzle",
    53: "🌦️ Drizzle",
    55: "🌧️ Heavy Drizzle",
    61: "🌧️ Light Rain",
    63: "🌧️ Rain",
    65: "🌧️ Heavy Rain",
    71: "🌨️ Light Snow",
    73: "🌨️ Snow",
    75: "❄️ Heavy Snow",
    80: "🌦️ Rain Showers",
    81: "🌧️ Rain Showers",
    82: "⛈️ Heavy Rain Showers",
    95: "⛈️ Thunderstorm",
    96: "⛈️ Thunderstorm with Hail",
    99: "⛈️ Thunderstorm with Hail"
};

async function searchWeather() {

    const city = document.getElementById("cityInput").value.trim();

    if (!city) {
        showMessage("Please enter a city name.");
        return;
    }

    showMessage("Searching...");

    try {

        const locationResponse = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`
        );

        const locationData = await locationResponse.json();

        if (!locationData.results || locationData.results.length === 0) {
            showMessage("City not found.");
            return;
        }

        const location = locationData.results[0];

        await loadWeather(
            location.latitude,
            location.longitude,
            `${location.name}, ${location.country}`
        );

    } catch (error) {
        showMessage("Unable to get weather data.");
    }
}

async function getLocationWeather() {

    if (!navigator.geolocation) {
        showMessage("Geolocation is not supported by your browser.");
        return;
    }

    showMessage("Getting your location...");

    navigator.geolocation.getCurrentPosition(
        async position => {

            await loadWeather(
                position.coords.latitude,
                position.coords.longitude,
                "Your Location"
            );

        },
        () => {
            showMessage("Unable to access your location.");
        }
    );
}

async function loadWeather(latitude, longitude, locationName) {

    try {

        showMessage("Loading weather...");

        const url =
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}` +
            `&longitude=${longitude}` +
            `&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,cloud_cover,wind_speed_10m` +
            `&daily=weather_code,temperature_2m_max,temperature_2m_min` +
            `&timezone=auto` +
            `&forecast_days=5`;

        const response = await fetch(url);
        const data = await response.json();

        displayWeather(data, locationName);

        showMessage("");

    } catch (error) {
        showMessage("Unable to load weather information.");
    }
}

function displayWeather(data, locationName) {

    document.getElementById("weather").classList.remove("hidden");

    document.getElementById("cityName").textContent = locationName;

    document.getElementById("date").textContent =
        new Date().toLocaleDateString();

    document.getElementById("description").textContent =
        weatherCodes[data.current.weather_code] || "Unknown";

    document.getElementById("temperature").textContent =
        Math.round(data.current.temperature_2m);

    document.getElementById("humidity").textContent =
        `${data.current.relative_humidity_2m}%`;

    document.getElementById("wind").textContent =
        `${data.current.wind_speed_10m} km/h`;

    document.getElementById("feels").textContent =
        `${Math.round(data.current.apparent_temperature)}°C`;

    document.getElementById("cloud").textContent =
        `${data.current.cloud_cover}%`;

    displayForecast(data.daily);
}

function displayForecast(daily) {

    const forecast = document.getElementById("forecast");

    forecast.innerHTML = "";

    for (let i = 0; i < daily.time.length; i++) {

        const date = new Date(daily.time[i]);

        const day = date.toLocaleDateString("en-US", {
            weekday: "short"
        });

        const description =
            weatherCodes[daily.weather_code[i]] || "Unknown";

        const card = document.createElement("div");

        card.className = "forecast-day";

        card.innerHTML = `
            <h3>${day}</h3>
            <div class="icon">${description.split(" ")[0]}</div>
            <p>${description.substring(description.indexOf(" ") + 1)}</p>
            <strong>
                ${Math.round(daily.temperature_2m_max[i])}° /
                ${Math.round(daily.temperature_2m_min[i])}°
            </strong>
        `;

        forecast.appendChild(card);
    }
}

function showMessage(message) {
    document.getElementById("message").textContent = message;
}

document.getElementById("cityInput").addEventListener("keydown", event => {

    if (event.key === "Enter") {
        searchWeather();
    }

});
