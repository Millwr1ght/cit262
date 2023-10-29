//imports
const express = require('express');

//define
const port = 3000;
const app = express();

//routes
app.get('/', (req,res) => {res.send("Hello Browser")});
app.get('/nathan', (req,res) => {res.send("Hello Nathan")});

//app start
app.listen(port, ()=>console.log("Listening"));