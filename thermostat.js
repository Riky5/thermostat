import { Weather } from './weatherapi.js';

class Thermostat {
  constructor(weather) {
    this.initTemp = 20
    this.minTemp = 10
    this.maxTemp = 32
    this.powerSaveMode = true;
    this.weather = weather;
  }

  setCity = (city) => {
    this.weather.fetchWeatherData(city, (weatherData) => {
      this.initTemp = weatherData;
    });
  }

  getTemperature = () => {
    return this.initTemp;
  }

  up = () => {
    if (this.initTemp === this.maxTemp) {
      return;
    } else {
      return this.initTemp += 1;
    }
  }

  down = () => {
    if (this.initTemp === this.minTemp) {
      return;
    } else {
      return this.initTemp -= 1;
    }
  }

  setPowerSavingMode = (boolean) => {
    if (boolean === true) {
      this.maxTemp = 25;
    } else {
      this.powerSaveMode = false;
    }
  }

  reset = () => {
    return this.initTemp = 20;
  }

  getEnergyUsage = () => {
    if (this.initTemp < 18) {
      return 'low-usage';
    } else if (this.initTemp <= 25) {
      return 'medium-usage';
    } else {
      return 'high-usage';
    }
  }
}

const weather = new Weather();
const thermostat = new Thermostat(weather);
thermostat.setCity('London');
const getTemp = () => { 
  console.log(thermostat.getTemperature());
};
setTimeout(getTemp, 1000);

export { Thermostat };