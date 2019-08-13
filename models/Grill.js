var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new GrillSchema object

// Add reservation schema per picture from class


// This is similar to a Sequelize model
// 
var GrillSchema = new Schema({
  grillType: String,
    // `type` must be of type String per TA
  description: String,
  // datesBooked: [Date] is this necessary or the right place?
  quantity: Number,
  price: Number,
  reservations: [{
    type: Schema.Types.ObjectId,
    ref: "Reservation"
  }]

});

//this doesn't feel right. I think name would be charcoal, gas, or trailor. Do we need a a description

// This creates our model from the above schema, using mongoose's model method
var Grill = mongoose.model("Grill", GrillSchema);

// Export the Grill model
module.exports = Grill;
