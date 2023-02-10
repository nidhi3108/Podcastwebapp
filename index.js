//importing express module
const express = require('express');
const app=express();
const port=5000;
const userRouter = require('./router/userRouter');
const utilRouter = require('./router/util');
const podcastRouter = require('./router/podcastRouter');    ``
const cors=require('cors');
//initializing express app
const path =require('path')


app.use(express.json());
app.use(cors({
    origin:['http://localhost:3000']
}))

app.use('/user',userRouter);
app.use('/util',utilRouter);
app.use('/podcast',podcastRouter);

app.use(express.static('./static/uploads'));
app.use(express.static(path.join__dirname, './frontend/build'));

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'./frontend/build/index.html'))
})

app.listen(port,()=>{
    console.log('express server started...');
});