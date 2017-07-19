"use strict"

var assert = require('assert')

function validator(citizenId) {

    return validateCommon(citizenId);
}

function validateCommon(citizenId) {

    if (citizenId.match('(^\\d{13}$)')) {
        summaryOfArrayMultipliedByPosition(citizenId)
        return true
    }
    else
        return false
}

function sumArrayMultipliedByPosition(citizenId) {

    let result = 0
    let multiplied = 12
    
    Array.from(citizenId).forEach((element) => {
        result += element * multiplied
        multiplied--
    })

    return result
}


if (!global.is_checking) {
    assert.equal(validator('1239900124231'), true, "1. best case 01")
    assert.equal(validator('1239900124232'), false, "2. last number notmatch")
    assert.equal(validator('123990012423'), false, "3. length < 13")
    assert.equal(validator('12399001242311'), false, "4. length > 13")
    assert.equal(validator('123990012423a'), false, "5. is not numeric")
    assert.equal(validator(''), false, "6. empty input")
    assert.equal(validator('1234567890121'), true, "6. best case ,after minus with 11 result >= 10")

    console.log('Passed')
}
