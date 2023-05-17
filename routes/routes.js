const Cart = require('../model/cart')
const Meals = require('../model/meals')
const Orders = require('../model/orders')

const route = require('express').Router()

route.get('/',(req,res)=>{
    res.json({message:"hello"})
})

route.get('/cart', async(req,res)=>{
    const cart = await Cart.find()
    res.json(cart).status(200)
    return;
})

route.put('/cart',async (req,res)=>{
    try{
        const cart = await Cart.findOne()
        console.log("cart",cart)
        if(!cart){
            const newCart = new Cart({
                items:req.body.items,
                totalAmount:req.body.totalAmount,
                totalQuantity:req.body.totalQuantity
            })
            await newCart.save()
            console.log("new CART:",newCart)
            res.json(newCart).status(201)
            return;
        }else{
            const updatedCart = await Cart.findByIdAndUpdate(cart._id,req.body,{new:true})
            console.log("updated cart:",updatedCart)
            res.json(updatedCart).status(203)
            return;
        }
    }
    catch(e){
        console.log(e.message)
    }
})

route.get('/meals',async (req,res)=>{
    const meals = await Meals.find();
    res.json(meals)
    return;
})

route.post('/meals',async (req,res)=>{
    const meals = new Meals(req.body)
    await meals.save()
    const allMeals = await Meals.find()
    res.json(allMeals)
    return;
})

route.get('/orders',async (req,res)=>{
    const orders = await Orders.find()
    res.json(orders);
    return;
})

route.post('/orders',async (req,res)=>{
    console.log("order body",req.body)
    const updateOrders = new Orders(req.body)
    await updateOrders.save()
    const allOrders = await Orders.find()
    res.json(allOrders)
    return;
})

route.delete('/orders/:orderId',async (req,res)=>{
    const orderId = req.params.orderId;
    // console.log(orderId)
    const updateOrders = await Orders.findByIdAndDelete(orderId,{new:true})
    res.json(updateOrders)
    return;
})

module.exports = route