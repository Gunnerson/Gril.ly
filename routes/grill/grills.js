const db = require("../../models")

const grills = (req, res) => {
    db.Grill.find({})
        .then(response => {
            responseTwo = response.map(grill => delete grill.reservations)
            return res.json(responseTwo)
        }).catch(error => {
            return res.json(error)
        })
}

module.exports = grills;