const {Router}=require("express");
const Track=require("../Model/Track");
const { error } = require("console");
const app=Router()

app.post('/addOrders',async(req,res)=>{
    const newData={
        ...req.body,
    }
    try {
        console.log("newdata is ",newData)
        const find=await Track.findOne({
            OrderID:newData.OrderID
        })
        if(find){
            res.json({
                message:'user already exists'
            })
        }else{
            const newOrder=new Track(newData)
            await newOrder.save()
            res.json({
                message:'success'
            })
        }
    } catch (e) {
        console.error(e)
    }
})


app.get('/searchOrders',async(req,res)=>{
    const tosearch=req.query.OrderID
    try {
        const find=await Track.findOne({
            OrderID:tosearch
        })
        if(find){
            res.json({
                message:find.Status
            })
        }else{
            res.json({
                message:"user not found"
            })
        }
    } catch (e) {
        console.error(e)
        res.json("error finding the employee")
    }
})

app.put('/updateOrders',async(req,res)=>{
    const toupdate={...req.body}
    try {
        const find=await Track.findOneAndUpdate({
            OrderID:toupdate.OrderID
        },{Status:toupdate.Status})
        res.json({message:"updated succesfully"})
    } catch (e) {
        res.json({
            error:e
        })
    }
})


app.get('/allOrders',async(Req,res)=>{
    const data=await Track.find({})
    try {
        res.json({data})
    } catch (error) {
        res.json({error:e})
    }
})

app.delete('/deleteOrders',async(req,res)=>{
    const todelete=req.query.OrderID
    try {
        const dlt=await Track.findOneAndDelete({
            OrderID:todelete
        })
        if(dlt){
            res.json({
                message:"deletion succesful"
            })
        }else{
            res.json({
                message:"deletion failed"
            })
        }
    } catch (e) {
        res.json({error:e})
    }
})

module.exports=app
