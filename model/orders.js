const mongoose = require('mongoose')

const ordersSchema = new mongoose.Schema({
    orderedItems:[
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
    user:{
        name:{
            type:String
        },
        street:{
            type:String
        },
        postalCode:{
            type:String
        },
        City:{
            type:String
        }
    }
})

module.exports = mongoose.model('orders',ordersSchema)