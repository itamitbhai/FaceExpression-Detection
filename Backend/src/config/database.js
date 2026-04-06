const mongoose = require("mongoose");

function connectToDB() {
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("DataBase COnnected")
    })
    .catch(err => {
        console.log("Error Connecting to Db ", err)
    })
}

module.exports = connectToDB;