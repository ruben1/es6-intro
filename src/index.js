// require('babel-runtime/core-js/promise').default = require('bluebird');
const _ = require('lodash');

describe('Class', function() {

});
describe('Function', function() {
  describe('with Arrow Syntax and no "function" keyword', function() {
    it('should allow the declaration of functions with the arrow syntax and without "function" keyword', function() {
      var func = (x) => {
        return x;
      };
      expect(func.prototype.constructor).toEqual(jasmine.any(Function))
    });
    it('should bind "this" to the outer scope', function(done) {
      this.name = 'Ruben';

      setTimeout(() => {
        expect(this.name).toEqual('Ruben');
        done()
      });
    });
    it('should allow one-line expressions with implicit return', function() {
      var sum = (x, y) => x + y
      expect(sum(1,2)).toEqual(3);
    });
    it('should allow function statements', function() {
      var substract = (x, y) => {
        return x - y;
      };
      expect(substract(3,1)).toEqual(2);
    });
    it('should allow no parens when there is only 1 argument', function() {
      var triple = x => x * 3
      expect(triple(10)).toEqual(30);
    });
  });
  describe('with default argument values', function() {
    beforeEach(function() {
    });
    it('should allow to set default argument values', function() {
      var sum = (x=1, y=2) => {
        return x + y;
      };
      expect(sum()).toEqual(3);
    });
    it('should allow to set certain default argument values', function() {
      var sum = (x = 1, y) => {
        return x + y;
      };
      var substract = (x, y = 1) => {
        return x - y;
      };
      expect(sum(undefined, 2)).toEqual(3);
      expect(substract(3)).toEqual(2);
    })
  });
  describe('with spread operator', function() {
    it('should pass an array of values just like .apply()', function() {
      const data = ['mexican', 'taco'];
      var eat = (place, food) => {
        return {
          place,
          food
        };
      };
      expect(eat(...data).place).toEqual('mexican');
      expect(eat(...data).food).toEqual('taco');
    });
  });
  describe('with rest parameter', function() {
    it('should have an array of values passed', function() {
      const data = ['mexican', 'taco', 'burrito']
      var eat = (place, ...food) => {
        return {
          place,
          food
        };
      };
      expect(eat(...data).place).toEqual('mexican');
      expect(eat(...data).food).toEqual(jasmine.any(Array));
      expect(eat(...data).food).toEqual(['taco', 'burrito']);
    });
  });
});
describe('Array', function() {
  it('should destructure an array', function() {
    var visits = [30, 34, 40];
    var [mondayVisits, tuesdayVisits, wednesdayVisits] = visits;
    expect(mondayVisits).toEqual(30);
    expect(tuesdayVisits).toEqual(34);
    expect(wednesdayVisits).toEqual(40);
  });

  describe('Array methods', function() {
    // it('should have Array.from()', function() {
    //   expect(Array.from).toBeDefined();
    // });
    // it('should have Array.to()', function() {
    //   expect(Array.to).toBeDefined();      
    // })
    // it('should have Array.entries()', function() {
    //   expect(Array.prototype.entries).toBeDefined();    
    // });
    // it('should have Array.keys()', function() {
    //   expect(Array.prototype.keys).toBeDefined();    
    // });
    // it('should have Array.values()', function() {
    //   expect(Array.prototype.values).toBeDefined();    
    // });

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
