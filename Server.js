import express from 'express';
const server=express();
server.get('/',(req,res)=>{
    res.send("Welcome to 3200");
});
server.listen(4000, () => {
    console.log("server is listening on 3200");
});
