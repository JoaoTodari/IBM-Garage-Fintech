var chai = require('chai');
var assert = chai.assert;

describe('Array', function(){

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
            console.log('invoke one assert');
            assert.equal(-1, ['A','B','C'].indexOf('D'));

        });

        it('should return corresponding index when the value is not present', function(){
            console.log('invoke second should');
            assert.equal(0, ['A','B','C'].indexOf('A'));
        });
    });
});
