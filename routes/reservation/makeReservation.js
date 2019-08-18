const models = require("../../models")

// Define API routes here

const makeReservation = (req, res) => {
    console.log(req.body)
    // Create a new Reservation in the database

    models.Reservation.create(req.body)

    .then(function(dbReservation) {
        // { new: true } tells the query that we want it to return the updated Reservation -- it returns the original by default
        // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
        models.Grill.findOneAndUpdate({grillType: req.body.grillType}, { $push: { reservations: dbReservation._id } }, { new: true });
    })
    .then(function(dbReservation) {
        models.User.findOneAndUpdate({_id: req.body.userId},// Paulina to provide us with what user ID is (token?)
        { $push: { reservations: dbReservation._id } }, { new: true });
    }
    )
    .then(function(dbReservation) {
        res.json(dbReservation)
    })
    .catch(function(err) {
        // If an error occurs, send it back to the client
        res.json(err);
    });

};

module.exports = makeReservation