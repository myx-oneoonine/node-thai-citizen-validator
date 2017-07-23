// let thaiCitizenValedator = require('../core.js')
let thaiCitizenValedator = require('thai-citizen-validator')
let assert = require('assert')

console.log(thaiCitizenValedator.validate('1239900124231'))


if (!global.is_checking) {
    // assert.equal(sumArrayMultipliedByPosition('1239900124231'), 285, "sumArray 1")
    // assert.equal(sumArrayMultipliedByPosition('1559900050472'), 350, "sumArray 2")
    // assert.equal(sumArrayMultipliedByPosition('1234567890121'), 352, "sumArray 3")

    assert.equal(thaiCitizenValedator.validate('1239900124231'), true, "1. best case 01")
    assert.equal(thaiCitizenValedator.validate('1239900124232'), false, "2. last number notmatch")
    assert.equal(thaiCitizenValedator.validate('123990012423'), false, "3. length < 13")
    assert.equal(thaiCitizenValedator.validate('12399001242311'), false, "4. length > 13")
    assert.equal(thaiCitizenValedator.validate('123990012423a'), false, "5. is not numeric")
    assert.equal(thaiCitizenValedator.validate(''), false, "6. empty input")
    assert.equal(thaiCitizenValedator.validate('1234567890121'), true, "6. best case ,after minus with 11 result >= 10")

    console.log('Passed')
}