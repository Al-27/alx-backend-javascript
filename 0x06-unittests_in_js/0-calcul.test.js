const calc = require('./0-calcul').calculateNumber;
const assert = require('assert');

let tests = [
    assert.equal(calc(2,3),5),
    assert.equal(calc(2.1,3),5),
    assert.equal(calc(2.4,3.3),5),
    assert.equal(calc(2.4,3.4),5),
    assert.equal(calc(2.32,3.3),5),
    assert.equal(calc(2.8,3.4),6),
    assert.equal(calc(2.9,3.4),6),
    assert.equal(calc(2.4,3.9),6),
    assert.equal(calc(2.8,3.8),7),
    assert.equal(calc(2.5,3.7),7)
];

describe('calculateNumber', ()=>{
    tests.forEach(el => it('...',  ()=>{
        el;
    }));
});

describe('calculateNumber', () => {
    it('', () => {
      assert.strictEqual(calc(1.0, 2.0), 3);
    })
});