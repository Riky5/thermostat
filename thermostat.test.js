import { Thermostat } from './thermostat.js';

describe('Thermostat', () => {
  it('gets the default temperature', () => {
    let thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toEqual(20);
  });
  it('increases the temperature by 1', () => {
    let thermostat = new Thermostat();
    thermostat.up();
    expect(thermostat.initTemp).toEqual(21);
  });
  it('reduces the temperature by 1', () => {
    let thermostat = new Thermostat();
    thermostat.down();
    expect(thermostat.initTemp).toEqual(19);
  });
  it('cannot be lower than 10', () => {
    let thermostat = new Thermostat();
    for (let i = 0 ; i < 11 ; i++) {
    thermostat.down();
    }
    expect(thermostat.initTemp).toEqual(10);
  });
  it('changes the PSM to off', () => {
    let thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    expect(thermostat.powerSaveMode).toEqual(false);
  });
  it('changes max temp to 25 if is on', () => {
    let thermostat = new Thermostat();
    thermostat.setPowerSavingMode(true);
    expect(thermostat.maxTemp).toEqual(25);
  });
  it('resets the temperature', () => {
    let thermostat = new Thermostat();
    for (let i = 0 ; i < 5 ; i++) {
    thermostat.down();
    }
    thermostat.reset();
    expect(thermostat.initTemp).toEqual(20);
  });
  it('returns energy usage is low', () => {
    let thermostat = new Thermostat();
    for (let i = 0 ; i < 5 ; i++) {
    thermostat.down();
    }
    expect(thermostat.getEnergyUsage()).toEqual('low-usage');
  });
  it('returns energy usage is medium', () => {
    let thermostat = new Thermostat();
    for (let i = 0 ; i < 2 ; i++) {
    thermostat.up();
    }
    expect(thermostat.getEnergyUsage()).toEqual('medium-usage');
  })
  it('returns energy usage is high', () => {
    let thermostat = new Thermostat();
    for (let i = 0 ; i < 8 ; i++) {
    thermostat.up();
    }
    expect(thermostat.getEnergyUsage()).toEqual('high-usage');
  })
});