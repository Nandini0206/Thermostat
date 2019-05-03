'use strict';

function Thermostat() {
  this.temperature = 20;
  this.powerSavingMode = true;
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

Thermostat.prototype.powerSaveOn = function(){
  return this.powerSavingMode = true;
};

Thermostat.prototype.powerSaveOff = function(){
  return this.powerSavingMode = false;
};
