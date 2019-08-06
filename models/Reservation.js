var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new ReservationSchema object

// Add reservation schema per picture from class


// This is similar to a Sequelize model
// 
var ReservationSchema = new Schema({
 
  date: date,
  grillRented: String,
  // datesBooked: [Date] is this necessary or the right place?
  quantity: integer,
  userId: String
});



// This creates our model from the above schema, using mongoose's model method
var Reservation = mongoose.model("Reservation", ReservationSchema);

// Export the Reservation model
module.exports = Reservation;
