const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();



// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});


// everything below here is what I need(paulina): 

// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const passport = require("passport");

// const users = require("./routes/api/users");

// const app = express();

// //Bodyparser middleware
// app.use(
//     bodyParser.urlencoded({
//         extended: false
//     })
// );
// app.use(bodyParser.json());

// //DB Config
// const db = require("./config/keys").mongoURI;

// //Connect to MongoDB
// mongoose
//     .connect(
//         db,
//         { useNewUrlParser: true }
//     )
//     .then(() => console.log("MongoDB successfully connected"))
//     .catch(err => console.log(err));

// //Passport middleware
// app.use(passport.initialize());

// //Passport config
// require("./config/passport")(passport);

// //Routes
// app.use("/api/users", users);



// const port = process.env.PORT || 5000; //process.env is Heroku's port

// app.listen(port, () => console.log(`Server up and running on port ${port} !`));