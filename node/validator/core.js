"use strict"

let thaiCitizenId = require('thai-citizen-generator')

module.exports = (citizenId) => {

    if (validateCitizenIDPattern(citizenId)) {

        return thaiCitizenId.generateLastNumber(citizenId.substring(0, 12)) == citizenId.substring(12)
    }
    else
        return false
}

function validateCitizenIDPattern(citizenId) {

    return citizenId.match('(^\\d{13}$)')
}





