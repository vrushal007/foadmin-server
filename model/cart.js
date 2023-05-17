const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    items:[
        {
            amount:{
                type:Number
            },
            name:{
                type:String
            },
            price:{
                type:Number
            }
        }
    ],
    totalAmount:{
        type:Number
    },
    totalQuantity:{
        type:Number
    }
})

module.exports = mongoose.model('cart',cartSchema)