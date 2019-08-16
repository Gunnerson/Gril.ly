const db = require("./models")

const importData = () => {
    db.Grill.insertMany(grillData, function (err, res) {
        console.log("error", err)
        console.log("response", res)
    })

    db.User.insertMany(userData, function (err, res) {
        console.log("error", err)
        console.log("response", res)
    })
}

grillData = [
    {"grillType": "Charcoal Grill (S)",
        "description": "A charcoal grill with a standard 22 inch grate",
        "quantity": 20,
        "price": 100},
    {"grillType": "Propane Grill (M)",
        "description": "A large propane grill with a closeable hood",
        "quantity": 30,
        "price": 150},
    {"grillType": "Propane Grillmeister (XL)",
        "description": "A massive grill for only the beastly of folks",
        "quantity": 5,
        "price": 400},
    {"grillType": "Smokeysmoketastic (M)",
        "description": "A smoker for people who really know their grill game",
        "quantity": 10,
        "price": 200},
]

userData = [
    {"name": "User One",
    "email": "testone@testone.com",
    "password": "password",
    "date": "01012019"},
    {"name": "User Two",
    "email": "testtwo@testtwo.com",
    "password": "password",
    "date": "02012019"},
    {"name": "User Three",
    "email": "testthree@testthree.com",
    "password": "password",
    "date": "03012019"},
    {"name": "User Four",
    "email": "testfour@testfour.com",
    "password": "password",
    "date": "04012019"}
]

const databaseCreation = () => {
    
    db.Grill.findOne({})
        .then(function(response) {
            if(response !== null) {
                console.log("Length of 1, data is populated!")
            }
            else {
                importData();
            }
        })

    db.User.findOne({})
        .then(function(response) {
            if(response !== null) {
                console.log("Length of 1, data is populated!")
            }
            else {
                importData();
            }
    })
}

module.exports = databaseCreation