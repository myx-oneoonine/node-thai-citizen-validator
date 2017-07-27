let thaiCitizenValidator = require('../validator/core.js')
// let thaiCitizenValidator = require('thai-citizen-validator')
let assert = require('assert')


console.log(thaiCitizenValidator('1239900124231'))
// console.log('test: ' + ['12399001241232','1','2'].isThaiCitizenId())
console.log('test: ' + '1239900124231'.isThaiCitizenId())

if (!global.is_checking) {
    // assert.equal(sumArrayMultipliedByPosition('1239900124231'), 285, "sumArray 1")
    // assert.equal(sumArrayMultipliedByPosition('1559900050472'), 350, "sumArray 2")
    // assert.equal(sumArrayMultipliedByPosition('1234567890121'), 352, "sumArray 3")

    assert.equal(thaiCitizenValidator('1239900124231'), true, "1. best case 01")
    assert.equal(thaiCitizenValidator('1239900124232'), false, "2. last number notmatch")
    assert.equal(thaiCitizenValidator('123990012423'), false, "3. length < 13")
    assert.equal(thaiCitizenValidator('12399001242311'), false, "4. length > 13")
    assert.equal(thaiCitizenValidator('123990012423a'), false, "5. is not numeric")
    assert.equal(thaiCitizenValidator(''), false, "6. empty input")
    assert.equal(thaiCitizenValidator('1234567890121'), true, "6. best case ,after minus with 11 result >= 10")
    assert.equal(thaiCitizenValidator('8199292747830'), true, "7. bug last number is 10")

    assert.equal('1239900124231'.isThaiCitizenId(), true, "1. test from String.prototype.isThaiCitizenId() best case 01")
    assert.equal('1239900124232'.isThaiCitizenId(), false, "2. test from String.prototype.isThaiCitizenId() last number notmatch")
    assert.equal('123990012423'.isThaiCitizenId(), false, "3. test from String.prototype.isThaiCitizenId() length < 13")
    assert.equal('12399001242311'.isThaiCitizenId(), false, "4. test from String.prototype.isThaiCitizenId() length > 13")
    assert.equal('123990012423a'.isThaiCitizenId(), false, "5. test from String.prototype.isThaiCitizenId() is not numeric")
    assert.equal(''.isThaiCitizenId(), false, "6. test from String.prototype.isThaiCitizenId() empty input")
    assert.equal('1234567890121'.isThaiCitizenId(), true, "6. test from String.prototype.isThaiCitizenId() best case ,after minus with 11 result >= 10")
    assert.equal('8199292747830'.isThaiCitizenId(), true, "7. test from String.prototype.isThaiCitizenId() bug last number is 10")

    console.log('Passed')
}