const db = require("../../models")

const grills = (req, res) => {
    db.Grill.find({})
        .then(response => {
            return res.json(response)
        }).catch(error => {
            return res.json(error)
        })
}

module.exports = grills;