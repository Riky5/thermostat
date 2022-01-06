class Thermostat {
  constructor() {
    this.initTemp = 20
    this.minTemp = 10
    this.maxTemp = 32
    this.powerSaveMode = true;
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
}

module.exports = Thermostat