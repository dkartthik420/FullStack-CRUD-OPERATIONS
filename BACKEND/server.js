const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const UserRouter=require("./Routes/UserRouter")

mongoose.connect("mongodb://localhost:27017/maruti")
  .then(() => {
    console.log("connected.....");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });


const app=express()
app.use(cors())
app.use(express.json());
app.use('/api',UserRouter)

app.listen(3000,(req,res)=>{
    console.log("listening to port 3000")
})