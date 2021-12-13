const Book = require('../models/bookModel');

exports.getBooks = (req, res, next) => {
    res.status(200).json(Book.fetchAll());
}

exports.getBooksById = (req, res, next) => {
    res.status(200).json(Book.findById(req.params.booId));
}

exports.save = (req, res, next) => {
    console.log("i was here ...................3");
    const boo = req.body;

    console.log(boo);
    const savedBoo = new Book(null, boo.title, boo.isbn, boo.publishedDate, boo.author).saves();
    res.status(201).json(savedBoo);
}

exports.update = (req, res, next) => {
    const boo = req.body;
    const updatedBook = new Book(req.params.booId, boo.title, boo.ISBN, boo.publishedDate, boo.author).update();
    res.status(200).json(updatedBook);
}

exports.deleteById = (req, res, next) => {
    Book.deleteById(req.params.booId);
    res.status(200).end();
}