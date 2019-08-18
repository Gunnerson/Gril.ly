const model = require("../../models")

const user = (req, res) => {
    if(req.body._id) {
        model.User.find({_id: req.body._id})
            .then(response => {
                return res.json(response)
            }).catch(error => {
                return res.json(error)
            })
    }
    else {
        return res.send("No valid _id")
    }
}

module.exports = user;