"use strict"

var assert = require('assert')

function validator(id) {
    return validateCommon(id);
}

function validateCommon(id) {

    if (id.match('(^\\d{13}$)')) {
        return true
    }
    else 
        return false
}


if (!global.is_checking) {
    assert.equal(validator('1239900124231'), true, "1. best case 01")
    //assert.equal(validator('1239900124232'), false, "2. last number notmatch")
    assert.equal(validator('123990012423'), false, "3. length < 13")
    assert.equal(validator('12399001242311'), false, "4. length > 13")
    assert.equal(validator('123990012423a'), false, "5. is not numeric")
    assert.equal(validator(''), false, "6. empty input")

    console.log('Passed')
}
