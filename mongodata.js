const db = require("./models")

const importData = () => {
    db.Grill.insertMany(grillData, function (err, res) {
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
}

module.exports = databaseCreation