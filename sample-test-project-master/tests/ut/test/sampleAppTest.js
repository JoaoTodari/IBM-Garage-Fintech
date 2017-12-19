var chai = require('chai'),
 myAppScript = require('../../../public/scripts/sampleScript.js'),
 assert = chai.assert;

describe('SampleScript Test', function(){

    before(function(){
        console.log('runs once before all');
    });
    beforeEach(function(){
        console.log('before each test');
    });

    afterEach(function(){
        console.log('after each test');
    });
    after(function(){
        console.log('runs once after all');
    });



    describe('array indexOf()', function(){

        it('should return -1 when the value is not present', function(){
          var array;

          myAppScript.addToArray('A');
          myAppScript.addToArray('B');
          myAppScript.addToArray('C');

          array = myAppScript.getArray();

          assert.equal(-1, array.indexOf('D'));

        });

        it('should return corresponding index when the value is not present', function(){
          var array;

          myAppScript.addToArray('A');
          myAppScript.addToArray('B');
          myAppScript.addToArray('C');

          array = myAppScript.getArray();

          assert.equal(0, array.indexOf('A'));
        });
    });
});
