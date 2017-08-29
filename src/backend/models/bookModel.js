'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BookSchema = new Schema({
  title: {
    type: String,
    required: 'Enter the title of the book'
  },
  author: {
    type: String,
    default: 'Enter author'
  },
 price: {
    type: Number,
    default: 0
  },
 year: {
    type: Number,
    default: 2017
  },
  
});


const Book=module.exports = mongoose.model('Book', BookSchema);