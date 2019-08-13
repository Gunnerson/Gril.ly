const db = require("../../models")

const grills = (req, res) => {
    if(req.params.date) {
        var array = req.params.date.match(/.{1,2}/g)
        if(array.length !== 3) {
            return res.send("The query is not in the correct date format. Please use the format MMDDYY.")
        }
        var date = new Date(Number(array[2]), Number(array[0]), Number(array[1]))
        console.log("Date queried", date)
    }
    else {
        var date = "invalid"
    }
    // a date will come over as req.params.date in the MMDDYY format 
    
    db.Grill.find({})
        .then(response => {
            let responseTwo = []; 
            // For each grill found
            response.forEach(grill => {
                // Check the reservations available and identify the quantity remaining
                for(let i = 0; i < grill.reservations.length; i ++) {
                    // Check if the date of the reservation matches the reservation
                    // If it does, reduce the quantity of grill.quantity by 1
                    if(date === grill.reservations[i].date) {
                        grill.quantity -= 1;
                    }    
                    // Else do nothing
                }
                grill.reservations = [];
                responseTwo.push(grill);
            });
            return res.json(responseTwo);
        }).catch(error => {
            return res.json(error);
        })
}

module.exports = grills;