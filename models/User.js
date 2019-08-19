const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date, 
        default: Date.now
    },
    payment: [
    {
        billing: {
            type: String,
            required: true
        },
        billing2: {
            type: String
        },
        billingCity: {
            type: String,
            required: true
        },
        billingState: {
            type: String,
            required: true
        },
        billingZip: {
            type: String,
            required: true
        },
        creditCardNum: {
            type: Number,
            required: true
        },
        expDate: {
            type: Date,
            required: true
        },
        csc: {
            type: Number,
            required: true
        }

    }
    ],

    //This needs to be updated from 'note' to maybe Grill
    reservations: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Note model
      ref: "Reservation"
    }
  ]
});

module.exports = User = mongoose.model("users", UserSchema);
