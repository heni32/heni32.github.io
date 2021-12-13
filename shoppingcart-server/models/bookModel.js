let books = [];

console.log("i was here ...................4");
module.exports = class Book {

    constructor(id, title, isbn, publishedDate, author) {
        this.id = id;
        this.title = title;
        this.isbn=isbn;
        this.publishedDate=publishedDate;
        this.author = author;
        
    }

    saves() {
        console.log("i was here ...................0");
        this.id = Math.random().toString();
        console.log("i was here ...................");
        books.push(this);
       
        return this;
    }

    update() {
        const index = books.findIndex(p => p.id === this.id);
        if (index > -1) {
            books.splice(index, 1, this);
            return this;
        } else {
            throw new Error('NOT Found');
        }

    }

    static fetchAll() {
        return books;
    }

    static findById(bookId) {
        const index = books.findIndex(p => p.id === bookId);
        if (index > -1) {
            return books[index];
        } else {
            throw new Error('NOT Found');
        }
    }

    static deleteById(bookId) {
        const index = books.findIndex(p => p.id === bookId);
        if (index > -1) {
            books = books.filter(p => p.id !== bookId);
        } else {
            throw new Error('NOT Found');
        }
    }

}