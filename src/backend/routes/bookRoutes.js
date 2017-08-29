const express  = require('express');
const router =express.Router();

const Book = require('../models/bookModel');

//retrieve books

router.get('/books',function(req,res,next){
  Book.find( function(err,books){
    res.json(books);
  })
});

//add book
router.post('/books',function(req,res,next){

  let newBook=new Book({
    title:req.body.title,
    author:req.body.author,
    price:req.body.price,
    year:req.body.year
  });

  newBook.save( function(err,book){
    if(err){
      res.json({msg:"failed to added to db"});
    }
    else{
      res.json({msg:'Book added succesfully'})
    }
  });

});



//get book 
router.get('/books/:id',function(req, res) {
    Book.find({_id:req.params.id}, function(err, book) {
        if (err)
            res.send(err);
        res.json(book);
    });
});

//update book
router.put('/books/:id',function(req, res) {

    
    book.findById(req.params.id, function(err, book) {

        if (err)
            res.send(err);

        book.name = req.body.name; 

       
        book.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Book updated!' });
        });

    });
});

 //delete book
router.delete('/books/:id',function(req,res,next){
  Book.remove({_id:req.params.id},function(err,result){
    if(err){
      res.json(err);
    }
    else{
      res.json(result)
    }

  });

});


module.exports=router;
