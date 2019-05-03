'use strict';

function Thermostat() {
  this.temperature = 20;
  this.minTemp = 10;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  return this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this.temperature === 10) {
    throw 'Temperature is too low';
  } else {
    return this.temperature -= 1;
 }
};
