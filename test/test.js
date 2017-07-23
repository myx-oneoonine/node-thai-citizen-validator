let thaiCitizenValidator = require('../node/core.js')
// let thaiCitizenValidator = require('thai-citizen-validator')
let assert = require('assert')

console.log(thaiCitizenValidator('1239900124231'))


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

    console.log('Passed')
}