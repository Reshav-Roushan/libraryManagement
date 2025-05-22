class Library{
    constructor(){
        this.books = [];
    }
    addBooks(books){
         this.books.push(...books);
    }

    listAllBooks(){
        this.books.forEach(function(book, index){
            console.log(`${index+1} ${book.title} by ${book.author}`);
        })
    }
}

class Books{
    constructor(title, author, price, genre, isbn){
          this.title = title;
          this.author = author;
          this.price = price;
          this.genre = genre;
          this.isbn = isbn;
          this.read = false;
    }
 
    info(){
        console.log(`${this.read?"✅":"❌" }${this.title} is based on  ${this.genre} genre written by ${this.author} having isbn no. ${this.isbn} and its price in both online & offline ${this.price}, and ${this.read?"You had read it.":"You must have to read it once."}`);
    }
    isRead(){
        console.log(this.read = !this.read);
    }

}

let book1 =new Books("2states","Chetan Bhagat","Rs 250","love","2EFd3456Z");
let book2 =new Books("Rich Dad Poor Dad","Robert Kioksi","Rs 100","Money Pshycologu","3ZFd3556Y");
let book3 =new Books("Half Girlfriend","Chetan Bhagat","Rs 250","love","2EFd424g456Z");
let book4 =new Books("Atomic Habit","Will Smith","Rs 1050","Life Learning","2EFd345afsdf6Z");
let book5 =new Books("Subtle Art","Bukosvi","Rs 2250","Reality","2E3884ncFd3456Z");

let lko = new Library();
lko.addBooks([book1, book2, book3, book4, book5]);


