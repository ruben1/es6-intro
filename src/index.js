const _ = require('lodash');

describe('Class', function() {

});
describe('Function', function() {

});
describe('Array', function() {
  it('should destructure an array', function() {
    var visits = [30, 34, 40];
    var [mondayVisits, tuesdayVisits, wednesdayVisits] = visits;
    expect(mondayVisits).toEqual(30);
    expect(tuesdayVisits).toEqual(34);
    expect(wednesdayVisits).toEqual(40);
  });

  describe('Array.prototype', function() {
    it('should have filter', function() {
      expect(Array.prototype.filter).toBeDefined();
    });
    it('should have reduce', function() {
      expect(Array.prototype.reduce).toBeDefined();    
    });
  });
});

describe('Object', function() {
  it('should destructure an object', function() {
    var person = {firstName: 'Ruben', lastName: 'Vicario'};
    var {firstName: name} = person;
    expect(name).toEqual('Ruben');
  });
  it('should allow to specify just attribute if it matches a variable name', function() {
    var title = 'Titulo';
    var description = 'Descripcion';

    var newPost = {
      title,
      description
    };
    expect(newPost.title).toEqual('Titulo');
    expect(newPost.description).toEqual('Descripcion');    
  });
  it('should have Object.assign', function() {
    //expect(Object.assign).toBeDefined();
  });
  describe('Object.prototype', function() {
  });
});

describe('Symbol', function() {

});
describe('Set', function() {

});
describe('Map', function() {

});
describe('Weakmap', function() {

});

describe('Variable Declarations', function() {
  describe(':var', function() {
    it('should be constrained to its enclosing function', function() {
      var hungry = true;
      if(hungry) {
        var food = 'taco';
      }
      expect(food).toBeDefined();
    });
  });
  describe(':let', function() {
    it('should be constrained to its enclosing block', function() {
      var hungry = true;
      var food; //initialize variable so that it doesn't throw an error on the expect
      if(hungry) {
        let food = 'taco';
      }
      expect(food).toBeUndefined();
    })
  });
  describe(':const', function() {
    it('should be read-only', function() {
      const browser = 'chrome';
      //browser = 'ie'; //would throw an error
      expect(true).toBe(true);
    });
  });
});


describe('Templates', function() {
  it('should have string interpolation', function() {
    var wine = 'Rioja';
    expect(`My favourite wine is ${wine}`).toEqual('My favourite wine is Rioja'); 
  });
  it('should have multiline strings', function() {
    expect(true).toBe(true);
  });
  it('should have tagged templates', function() {
    expect(true).toBe(true);
  });
});

describe('Promise', function() {

});
describe('Iterator', function() {

});
describe('Generator', function() {

});
describe('Proxy', function() {

});
