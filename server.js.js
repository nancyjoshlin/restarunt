const express =require('express');
const bodyParser=require('body-Parser');
const path=require('path');
const http = require('http');
const app =express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'build')))
app.get('/',(req,res)=>{
    res.sendFile(path.json(__dirname,'build/index.js'));
})
const port =process.env.PORT || '3046';
app.set('port',port);
const server = http.createServer(app);
server.listen(port,()=> console.log(`Running on localhost:${port}`))