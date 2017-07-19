"use strict"

var assert = require('assert')

function validator(citizenId) {
    if (validateCitizenIDPattern(citizenId)) {

        let result = 11 - sumArrayMultipliedByPosition(citizenId) % 11
        result = result === 11 ? 1 : result

        return result == citizenId.substring(12)
    }
    else
        return false
}

function validateCitizenIDPattern(citizenId) {

    return citizenId.match('(^\\d{13}$)')
}

function sumArrayMultipliedByPosition(citizenId) {

    let result = 0
    let multiplied = 13

    Array.from(citizenId.substring(0, 12)).forEach((element) => {
        result += element * multiplied
        // console.log(`${element} * ${multiplied} = ${element * multiplied}`)
        multiplied--
    })
    // console.log(result)
    return result
}



if (!global.is_checking) {
    assert.equal(sumArrayMultipliedByPosition('1239900124231'), 285, "sumArray 1")
    assert.equal(sumArrayMultipliedByPosition('1559900050472'), 350, "sumArray 2")
    assert.equal(sumArrayMultipliedByPosition('1234567890121'), 352, "sumArray 3")

    assert.equal(validator('1239900124231'), true, "1. best case 01")
    assert.equal(validator('1239900124232'), false, "2. last number notmatch")
    assert.equal(validator('123990012423'), false, "3. length < 13")
    assert.equal(validator('12399001242311'), false, "4. length > 13")
    assert.equal(validator('123990012423a'), false, "5. is not numeric")
    assert.equal(validator(''), false, "6. empty input")
    assert.equal(validator('1234567890121'), true, "6. best case ,after minus with 11 result >= 10")

    console.log('Passed')
}
