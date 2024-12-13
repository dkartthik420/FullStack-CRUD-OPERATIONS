const mongoose=require("mongoose")
const schema=mongoose.Schema({
    OrderID:{
        type:Number,
        unique:true
    },
    CustomerName:{
        type:String
    },
    DeliveryAddress:{
        type:String
    },
    Status:{
        type:String
    },
    ExpectedDeliveryDate:{
        type:Date,
        default:Date.now()
    }
})
const Track=mongoose.model('track',schema);
module.exports=Track