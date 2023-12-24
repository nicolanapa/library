let myLibrary = ["Harry Potter by Rowling, 300 pages, read", "Jelson by Edwards, 210 pages, read",  "Jelson by Edwards, 210 pages, read", "Jelson by Edwards, 210 pages, read", "Jelson by Edwards, 210 pages, read", "Jelson by Edwards, 210 pages, read", "Jelson by Edwards, 210 pages, read"];
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
    
}
/*let ape = new Book("Api", "Gianni", "300 pages", "not read yet");
addBookToLibrary(ape);*/