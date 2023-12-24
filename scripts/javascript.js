let myLibrary = ["Harry Potter by Rowling, 300 pages, read", "Jelson by Edwards, 210 pages, read"];
function Book(title, autor, pages, read) {
    this.title = title;
    this.autor = autor;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return title + " by " + autor + ", " + pages + ", " + read;
    }
}

function addBookToLibrary() {
    let bookTitle = document.getElementById("#title").value;
    let bookAuthor = document.getElementById("#author").value;
    let bookPages = document.getElementById("#pages").value;
    let bookRead = document.getElementById("#read").value;
    let newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);

}

function addBookToSite() {
    for (let i = 0; i < myLibrary.length; i++) {
        let bookContainer = document.querySelector("#library")
        let newBook = document.createElement("div");
        newBook.classList.add("book");
        newBook.textContent = myLibrary[i];
        bookContainer.appendChild(newBook);
    }
}
addBookToSite();

function readStatus() {
//Books already created read not read status
}

let dialogNewBook = document.querySelector("#book-dialog");
let buttonNewBook = document.querySelector("#newBookButton")
buttonNewBook.addEventListener("click", function() {
    dialogNewBook.showModal();
});

let formButton = document.querySelector("#form-button");
formButton.addEventListener("click", function() {
    addBookToLibrary();
});

//let bookForm = document.querySelector("#book-form");
//let newBook =  new Book(bookForm#title, bookForm#author, bookForm#pages, bookForm#read);
