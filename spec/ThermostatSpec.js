'use strict';

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('initial temperature', function(){
    it('has temeprature of 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20)
    });
  });

  describe('up',function(){
    it('increases temperature by 1 dg', function(){
      thermostat.up();
      expect(thermostat.temperature).toEqual(21);
    });
  });

  describe('down', function(){
    it('decreases temperature by 1 dg', function(){
      thermostat.down();
      expect(thermostat.temperature).toEqual(19)
    });

    it('has a minimum temp of 10 degrees', function(){
      thermostat.temperature = 10
      expect(function() {thermostat.down()}).toThrow('Temperature is too low')
    });
  });
});
