//express is package which consists to of request and response functions
// whenever we request for any webpage on brouser we se get request
//we create a server who listenes request and give response



//to run a js file on node application  or to run a frontend page on node file using backend

console.log("i am going to deploy");

// how to run file using package.json file
//using 'start' commandvwe can run a node file using nade package file
// this helps us in running a file through servers 
// use this command on server to run


// there are many port or servers which can be busy on others computers and not availble
//or we dont want to share port with others users
//then install dotenv module
require('dotenv').config()
console.log(process.env)


const express = require('express')
//or
//import express from "express"

const app = express()
// there are many free port available
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res) =>{
    res.send("this is my twitter handle")
})


//when we add a another page on server restart the server otherwise use nodemon
app.get('/login',(req,res) =>{
    res.send("<h1>welcome to login page</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})



//now we can deploy our application on aws,digitalocean etc 
//but people misuse them 
//now almost every platform to deploy our website/server is paid

