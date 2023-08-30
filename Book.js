/** LinkedIn Learning - Javascript Essential Training
 * Challenge: Create a new object type
 * 
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

//define a object constructor
class Book {
    constructor(bookName, author, yearPublished, genre) {
    //create object properties
    this.bookName = bookName;
    this.author = author;
    this.yearPublished = yearPublished;
    this.genre = genre;
    }
    //create a simple method to calculate the age of the book
    getBookAge() {
        var todayDate = new Date();
        var year = todayDate.getFullYear();
        var age = year - this.yearPublished;
        return this.bookName + " book is already " + age + " years old.";
    
    }
}

let newBook1 = new Book ("To Kill a Mockingbird", "Harper Lee", 1960, "Historical Fiction");
let newBook2 = new Book ("The Lord of the Rings", "J.R.R. Tolkien", 1954, "Fantasy");
let newBook3 = new Book ("The Hunger Games", "Suzanne Collins ", 2008, "Dystopian Fiction");
let newBook4 = new Book ("Pride and Prejudice", "Jane Austen", 1813, "Historical Fiction");
let newBook5 = new Book ("1984 ", "George Orwell", 1949, "Political Fiction");
console.log(newBook1.getBookAge());
console.log(newBook2.getBookAge());
console.log(newBook3.getBookAge());
console.log(newBook4.getBookAge());
console.log(newBook5.getBookAge());