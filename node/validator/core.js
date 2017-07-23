"use strict"

module.exports = (citizenId) => {

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
        multiplied--
    })
    return result
}

 



