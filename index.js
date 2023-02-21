const express = require("express")
const app= express()
const cors =require("cors")
const port= 4000
const studentDetails={name:"ravi",age:24,gender:"male"}
const productsDetails=require("./products")

app.use(cors() )


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