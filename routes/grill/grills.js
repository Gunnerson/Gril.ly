const db = require("../../models")

const grills = (req, res) => {
    db.Grill.find({})
        .then(response => {
            let responseTwo = []; 
            response.forEach(grill => {
                grill.reservations = [];
                responseTwo.push(grill);
            });
            return res.json(responseTwo);
        }).catch(error => {
            return res.json(error);
        })
}

module.exports = grills;