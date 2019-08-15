const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");



const users = require("./routes/api/users");

const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();


// Defining middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));      // If a Reservation was created successfully, find one library (there's only one) and push the new Reservation's _id to the Grill's `reservations` array
}

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
  console.log("Mongo attempting to connect...")
});

//Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

//DB Config
const db = require("./config/keys").mongoURI;
const mongoimport = require("./mongodata")

//Connect to MongoDB
mongoose
    .connect(
        db,
        { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(   
      err => {console.log(err)
      mongoose.connect("mongodb://localhost/grilly", { useNewUrlParser: true })
        .then(() => {
          console.log("Mongo connected locally")
          mongoimport();
        }
        )
    .catch(err => console.log(err))}
      );

//Passport middleware
app.use(passport.initialize());

//Passport config
require("./config/passport")(passport);

const routes = require("./routes")
app.use("/", routes)
    // //Routes
    // app.use("/api/users", users);

    const models = require("./models");

    // Send every other request to the React app
    // Define any API routes before this runs
    // app.get("*", (req, res) => {
    //   res.sendFile(path.join(__dirname, "./client/build/index.html"));
    // });