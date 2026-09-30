from flask import Flask, jsonify, request
import requests

app = Flask(__name__)


@app.route("/")
def home():
    return jsonify({
        "application": "Weather Forecasting API",
        "status": "running"
    })


@app.route("/weather")
def weather():

    city = request.args.get("city")

    if not city:
        return jsonify({
            "error": "City name is required"
        }), 400

    geo_url = "https://geocoding-api.open-meteo.com/v1/search"

    geo_params = {
        "name": city,
        "count": 1,
        "language": "en",
        "format": "json"
    }

    geo_response = requests.get(
        geo_url,
        params=geo_params,
        timeout=10
    )

    geo_data = geo_response.json()

    if "results" not in geo_data:
        return jsonify({
            "error": "City not found"
        }), 404

    location = geo_data["results"][0]

    weather_url = "https://api.open-meteo.com/v1/forecast"

    weather_params = {
        "latitude": location["latitude"],
        "longitude": location["longitude"],
        "current": (
            "temperature_2m,"
            "relative_humidity_2m,"
            "apparent_temperature,"
            "weather_code,"
            "cloud_cover,"
            "wind_speed_10m"
        ),
        "daily": (
            "weather_code,"
            "temperature_2m_max,"
            "temperature_2m_min"
        ),
        "timezone": "auto",
        "forecast_days": 5
    }

    weather_response = requests.get(
        weather_url,
        params=weather_params,
        timeout=10
    )

    return jsonify({
        "location": location,
        "weather": weather_response.json()
    })


if __name__ == "__main__":
    app.run(debug=True)
