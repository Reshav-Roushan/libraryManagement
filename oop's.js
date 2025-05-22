class Library{
    constructor(){
        this.books = [];
    }
    addBooks(books){
         this.books.push(books);
    }

    listAllBooks(){
        this.books.forEach(function(book){
            console.log(book);
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
    }
 
    info(){
        console.log(`${title} is based on  ${genre} genre written by ${author} having isbn no. ${isbn} and its price in both online & offline ${price}.`)
    }


}

let book1 =new Books("2states","Chetan Bhagat","Rs 250","love","2EFd3456Z");

let lko = new Library();
lko.addBooks(book1.title);

