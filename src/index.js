const express = require('express')
const app = express()
const mongoose = require("mongoose")
const port = 8081
const channels = require('./routes/channels')
const actions = require('./routes/actions')
const users = require('./routes/users')
var bodyParser = require('body-parser')
app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
mongoose.connect('mongodb+srv://admin:admin@cluster0.e3mbk.mongodb.net/IRC?retryWrites=true&w=majority',function(err){
  if (err) throw err;
  console.log("Connected to db");
})

app.use('/channels', channels);
app.use('/users', users);
app.use('/actions', actions);



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})