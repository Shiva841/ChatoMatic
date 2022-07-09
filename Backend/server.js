const express = require("express");
const {chats} = require("./data/data");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

const port = process.env.PORT;

app.get("/",(req,res)=>{
    res.send("<h1>This is api for homepage</h1>");
});

app.get("/api/chat",(req,res)=>{
    res.send(chats)
});

app.get("/api/chat/:id",(req,res)=>{
    res.send(chats.find(e=>e._id === req.params.id));
});

app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
});