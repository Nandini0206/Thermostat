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

  describe('increase temperature',function(degrees){
    it('increase temperature by 5 degrees', function(degrees){
      thermostat.up(5);
      expect(thermostat.temperature)toEqual(25)
    });
  });
});
