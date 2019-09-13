const express = require('express');
const server = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db_config = require('./config/dbconfig');

//defining routes
const donate = require('./routes/api/v1/donate');
const indexRouter = require('./routes/api/v1/indexRouter');

// using middleware
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.set('view engine','html');

//defining port
const PORT = 4000;

//connecting db
mongoose.connect(db_config.url, {useNewUrlParser: true}).then(() => {
    console.log('Db connected successfully');
}).catch(err => console.log(err))

//serveing static files
server.use(express.static(__dirname + '/'));

//using routes
// server.use('/api/v1/donate', donate);
// server.use('', indexRouter);


server.get('/' , (req , res) => {
    res.redirect('./views/index.html'); 
})

server.listen(PORT, () => {
    console.log("server started at port: "+ PORT);
})