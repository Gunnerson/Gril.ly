var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new ReservationSchema object

// Add reservation schema per picture from class


// This is similar to a Sequelize model
// 
var ReservationSchema = new Schema({
 
// Values that are passed through from different parts of the application
  date: Date,
  grillRented: String,
  userId: String,

// On the form right now
  billingAddress: String,
  billingAddress2: String,
  billingCity: String,
  billingState: String,
  billingZip: String,
  creditCardNum: String,
  expDate: Number,
  Csc: Number
});

// no connection to user ID or grill (Brandon)

// This creates our model from the above schema, using mongoose's model method
var Reservation = mongoose.model("Reservation", ReservationSchema);

// Export the Reservation model
module.exports = Reservation;
