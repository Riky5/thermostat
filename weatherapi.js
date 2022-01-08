import { got } from 'got';
import dotenv from 'dotenv';
dotenv.config();

class Weather {
  constructor() {
    this.api = `${process.env.API_KEY}`
  }
  
  fetchWeatherData(city, callbackFn) {
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${this.api}`;
    let weatherData = null;
    got(apiUrl).then((response) => {
      weatherData = JSON.parse(response.body);
      callbackFn(weatherData.main.temp);
    });
  }
};

export { Weather };
