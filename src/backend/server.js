var express = require('express'),
  app = express(),
  port = 8080,
  mongoose = require('mongoose'),
  Book = require('./models/bookModel'), //created model loading here
  bodyParser = require('body-parser'),
  cors= require('cors'),
  path=  require('path');



const route =require('./routes/bookRoutes');

//mongodb
mongoose.connect('mongodb://localhost:27017/booklist');
mongoose.connection.on('connected',function(){
  console.log("Connected to db");
});
mongoose.connection.error('connected',function(err){
  if(err){
    console.log("Error");
  }
});


//bodyParser

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//middleware-cors
app.use(cors());

//routes
app.use('/api',route);

//static files
app.use(express.static(path.join(__dirname,'public')));

app.get('/',  function(req, res){
  res.send('Hello World!');
});

app.listen(port,  function() {
  console.log('Example app listening on '+ port);
});


