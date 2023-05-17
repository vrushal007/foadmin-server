const mongoose = require('mongoose')

const mealSchema = new mongoose.Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    price:{
        type:Number
    }
})

module.exports = mongoose.model('meals',mealSchema)