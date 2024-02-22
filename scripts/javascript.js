let myLibrary = [];
/*function Book(title, autor, pages, read) {
    this.title = title;
    this.autor = autor;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return title + " by " + autor + ", " + pages + ", " + read;
    }
}*/
class Book {
	constructor(title, autor, pages, read) {
		this.title = title;
		this.autor = autor;
		this.pages = pages;
		this.read = read;
	}

	info() {
		return this.title + " by " + this.autor + ", " + this.pages + ", " + this.read;
	}
}

function addBookToLibrary() {
	// Get form value and input them in myLibrary
	let bookTitle = document.getElementById("title").value;
	let bookAuthor = document.getElementById("author").value;
	let bookPages = document.getElementById("pages").value + " pages";
	let bookRead = document.getElementById("read").value;
	let newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
	myLibrary[length] = newBook.info();
	addBookToSite(bookRead);
}

function addBookToSite(bookRead) {
	// Add the book in the website
	for (let i = 0; i < myLibrary.length; i++) {
		let bookContainer = document.querySelector("#library");
		let newBook = document.createElement("div");
		let deleteButton = document.createElement("button");
		let readButton = document.createElement("button");
		readButton.classList.add("readButton");
		deleteButton.classList.add("deleteButton", "readButton");
		newBook.classList.add("book");
		newBook.textContent = myLibrary[i];
		bookContainer.appendChild(newBook);
		readButton.textContent = "Change Read Status";
		deleteButton.textContent = "Delete this book";
		newBook.appendChild(deleteButton);
		newBook.appendChild(readButton);
		readButton.addEventListener("click", function () {
			if (bookRead == "read") {
				bookRead = "not read it yet";
				let myLibrary2 = myLibrary[i].toString();
				newBook.textContent = myLibrary2.replace(/read/g, "not read it yet");
				newBook.appendChild(deleteButton);
				newBook.appendChild(readButton);
			} else if (bookRead == "not read it yet") {
				bookRead = "read";
				let myLibrary2 = myLibrary[i].toString();
				newBook.textContent = myLibrary2.replace(/not read it yet/g, "read");
				newBook.appendChild(deleteButton);
				newBook.appendChild(readButton);
			}
		});
		deleteButton.addEventListener("click", function () {
			newBook.remove();
		});
	}
}

let dialogNewBook = document.querySelector("#book-dialog");
let buttonNewBook = document.querySelector("#newBookButton");
buttonNewBook.addEventListener("click", function () {
	dialogNewBook.showModal();
});

let formButton = document.querySelector("#form-button");
formButton.addEventListener("click", function () {
	addBookToLibrary();
});

function validateForm() {
	let form = document.querySelector("#book-form");
	let readYet = document.querySelector("#read");

	readYet.addEventListener("input", (event) => {
		if (readYet.validity.valueMissing) {
			readYet.classList.toggle("error");
			event.preventDefault();
		}
	});

	form.addEventListener("submit", (event) => {
		if (!true) {
			showError();
			event.preventDefault();
		}
	});

	function showError() {}
}

validateForm();
