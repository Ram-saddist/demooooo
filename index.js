const express = require("express")
const app= express()
const cors =require("cors")
const bodyparser=require("body-parser")
const port= 4000
const studentDetails={name:"ravi",age:24,gender:"male"}
const productsDetails=require("./products")
const mongoose=require("mongoose")
app.use(cors())
app.use(bodyparser.urlencoded({
	extended:true
}))
app.use(bodyparser.json())
mongoose.connect("mongodb+srv://sivaram:sivaram@cluster0.u4qb9wk.mongodb.net/?retryWrites=true&w=majority")
	.then(()=>{
		console.log("DataBase connected successfully")
	})


app.get("/",(req,res)=>{
	res.send("it is ")
})
app.get("/student",(req,res)=>{
	return res.json(studentDetails)
})

app.get("/products",(req,res)=>{
	return res.json(productsDetails)
})


app.listen(port,()=>console.log("server is running on port",port))