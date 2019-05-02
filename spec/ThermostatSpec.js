describe('Thermostat', function(){
  var thermostat;

  beforeEach( function(){
    thermostat = new Thermostat()
  };

  describe('initial temperature', function(){
    it('has temeprature of 20 degrees', function(){
      expect(thermostat.temperature)toEqual(20)
    });
  });

  describe('up',function(degrees){
    it('increases temperature', function(degrees){
      thermostat.up();
      expect(thermostat.temperature)toEqual(25)
    });
  });

  describe('down', function(degrees){
    it('decreases temperature', function(degrees){
      thermostat.down();
      expect(thermostat.temperature)toEqual(15)
    });
  });
});
