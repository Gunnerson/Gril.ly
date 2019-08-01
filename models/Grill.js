var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var GrillSchema = new Schema({
  // `type` must be of type String
  type: String,
  // `quantity` must be of type String
  name: String,
  datesBooked: [Date]
});

// This creates our model from the above schema, using mongoose's model method
var Grill = mongoose.model("Grill", GrillSchema);

// Export the Note model
module.exports = Grill;
