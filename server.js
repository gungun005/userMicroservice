const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//app.use('/', require('./routes/serverRoutes'));
app.listen(process.env.PORT || 8100, ()=>{console.log("Listening to port 8000")});