require('babel-runtime/core-js/promise').default = require('bluebird');
const _ = require('lodash');

describe('Class', function() {
  it('should create prototype-based functions with the "class" keyword', () => {
    class Person {
      constructor(name) {
        this.name = name;
      }
    }
    var person = new Person('Ruben');
    expect(person.name).toEqual('Ruben');
  });
  it('should allow to create instance methods', () => {

  });
});
describe('Function', () => {
  describe('with Arrow Syntax and no "function" keyword', () => {
    it('should allow the declaration of functions with the arrow syntax and without "function" keyword', () => {
      var func = (x) => {
        return x;
      };
      expect(func.constructor).toEqual(jasmine.any(Function))
    });
    it('should bind "this" to the outer scope', function(done) {
      this.name = 'Ruben';

      setTimeout(() => {
        expect(this.name).toEqual('Ruben');
        done()
      });
    });
    it('should allow one-line expressions with implicit return', () => {
      var sum = (x, y) => x + y
      expect(sum(1,2)).toEqual(3);
    });
    it('should allow function statements', () => {
      var substract = (x, y) => {
        return x - y;
      };
      expect(substract(3,1)).toEqual(2);
    });
    it('should allow no parens when there is only 1 argument', () => {
      var triple = x => x * 3
      expect(triple(10)).toEqual(30);
    });
  });
  describe('with default argument values', () => {
    beforeEach(() => {
    });
    it('should allow to set default argument values', () => {
      var sum = (x=1, y=2) => {
        return x + y;
      };
      expect(sum()).toEqual(3);
    });
    it('should allow to set certain default argument values', () => {
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
  describe('with spread operator', () => {
    it('should pass an array of values just like .apply()', () => {
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
  describe('with rest parameter', () => {
    it('should have an array of values passed', () => {
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
describe('Array', () => {
  it('should destructure an array', () => {
    var visits = [30, 34, 40];
    var [mondayVisits, tuesdayVisits, wednesdayVisits] = visits;
    expect(mondayVisits).toEqual(30);
    expect(tuesdayVisits).toEqual(34);
    expect(wednesdayVisits).toEqual(40);
  });

  describe('Array methods', () => {
    xit('should have Array.from()', () => {
      expect(Array.from).toBeDefined();
    });
    xit('should have Array.to()', () => {
      expect(Array.to).toBeDefined();      
    })
    xit('should have Array.entries()', () => {
      expect(Array.prototype.entries).toBeDefined();    
    });
    xit('should have Array.keys()', () => {
      expect(Array.prototype.keys).toBeDefined();    
    });
    xit('should have Array.values()', () => {
      expect(Array.prototype.values).toBeDefined();    
    });

  });
});

describe('Object', () => {
  it('should destructure an object', () => {
    var person = {firstName: 'Ruben', lastName: 'Vicario'};
    var {firstName: name} = person;
    expect(name).toEqual('Ruben');
  });
  it('should allow to specify just attribute if it matches a variable name', () => {
    var title = 'Titulo';
    var description = 'Descripcion';

    var newPost = {
      title,
      description
    };
    expect(newPost.title).toEqual('Titulo');
    expect(newPost.description).toEqual('Descripcion');    
  });
  xit('should have Object.assign', () => {
    expect(Object.assign).toBeDefined();
  });
  describe('Object.prototype', () => {
  });
});

describe('Symbol', () => {

});
describe('Set', () => {

});
describe('Map', () => {

});
describe('Weakmap', () => {

});

describe('Variable Declarations', () => {
  describe('var', () => {
    it('should be constrained to its enclosing function', () => {
      var hungry = true;
      if(hungry) {
        var food = 'taco';
      }
      expect(food).toBeDefined();
    });
  });
  describe('let', () => {
    it('should be constrained to its enclosing block', () => {
      var hungry = true;
      var food; //initialize variable so that it doesn't throw an error on the expect
      if(hungry) {
        let food = 'taco';
      }
      expect(food).toBeUndefined();
    });
  });
  describe('const', () => {
    it('should be constrained to its enclosing block', () => {
      var hungry = true;
      var food; //initialize variable so that it doesn't throw an error on the expect
      if(hungry) {
        const food = 'taco';
      }
      expect(food).toBeUndefined();
    });

    it('should be read-only', () => {
      const browser = 'chrome';
      //browser = 'ie'; //would throw an error
      expect(true).toBe(true);
    });
  });
});


describe('Templates', () => {
  it('should have string interpolation', () => {
    var wine = 'Rioja';
    expect(`My favourite wine is ${wine}`).toEqual('My favourite wine is Rioja'); 
  });
  it('should have multiline strings', () => {
    expect(true).toBe(true);
  });
  it('should have tagged templates', () => {
    expect(true).toBe(true);
  });
});

describe('Promise', () => {
  describe('constructor', () => {
    it('should have a promise constructor', () => {
      expect(Promise).toEqual(jasmine.any(Function));
    });
    describe('#all', () => {
      it('should have .all() method', () => {
        expect(Promise.all).toEqual(jasmine.any(Function));
      });
      it('.all() should return a promise that resolves when all the promises passed into it have resolved', done => {
        var promise1 = new Promise((resolve, reject) => {
          resolve(1);
        });
        var promise2 = Promise.resolve(2);
        var promiseGroup = Promise.all([promise1, promise2])
          .then(values => {
            expect(values).toEqual([1,2]);
            done();
          });
      });
      it('.all() should return a promise that rejects if any promise passed into it have rejected', done => {
        var promise1 = new Promise((resolve, reject) => {
          resolve(1);
        });
        var promise2 = Promise.reject('random error');
        var promiseGroup = Promise.all([promise1, promise2])
          .then(values => {
            //doesn't get here;
          })
          .catch(err => {
            expect(err).toEqual('random error');
            done();
          }); 
      });
    });
    describe('#resolve', () => {
      it('should have .resolve() method', () => {
        expect(Promise.resolve).toEqual(jasmine.any(Function));
      });
      it('should return a promise that will be resolved with the value passed', done => {
        var promise1 = Promise.resolve(1);

        promise1.then(value => {
          expect(value).toEqual(1);
          done();
        });
      });
      it('should return a promise that will be resolved with the promise passed', done => {
        var promise2 = Promise.resolve(new Promise(resolve => {
          setTimeout(() => {
            resolve(2);
          }, 100);
        }));
        
        promise2.then(value => {
          expect(value).toEqual(2);
          done();
        }); 
      });
      it('should return a promise that will be resolved with the "thenable" object passed', done => {
        var obj = {
          then: (onFulfill, onReject) => {
            onFulfill(3);
          }
        };
        var promise3 = Promise.resolve(obj);

        promise3.then(value => {
          expect(value).toEqual(3);
          done();
        });
      });
    });
    describe('#reject', () => {
      it('should have reject method', function() {
        expect(Promise.reject).toEqual(jasmine.any(Function));
      });
      it('should return a promise that will be reject with the error passed', done => {
        var promise = Promise.reject(new Error('random error'));

        promise.catch(err => {
          expect(err.constructor).toEqual(Error);
          done();
        });
      });
    });
  });
  describe('instance', () => {
    it('should be able to create a new promise', () => {
      var promise = new Promise((resolve, reject) => {
        resolve(1);
      });
      expect(promise.constructor).toEqual(Promise);
    });
    it('should be able to resolve a promise', done => {
      var promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(1);
        }, 100);
      });

      promise.then(value => {
        expect(value).toEqual(1);
        done();
      });
    });
    it('should be able to reject a promise', done => {
      var promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(2);
        }, 100);
      });

      promise.catch(err => {
        expect(err).toEqual(2);
        done();
      });
    });
  });
});
describe('Iterator', () => {

});
describe('Generator', () => {

});
describe('Proxy', () => {

});
