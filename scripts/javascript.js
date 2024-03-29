let myLibrary = [];

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
				bookRead = "not read";
				let myLibrary2 = myLibrary[i].toString();
				newBook.textContent = myLibrary2.replace("read", bookRead);
				newBook.appendChild(deleteButton);
				newBook.appendChild(readButton);
			} else if (bookRead == "not read") {
				bookRead = "read";
				let myLibrary2 = myLibrary[i].toString();
				newBook.textContent = myLibrary2.replace("not read", bookRead);
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

/*let formButton = document.querySelector("#form-button");
formButton.addEventListener("click", function () {
	addBookToLibrary();
});*/

function validateForm() {
	let form = document.querySelector("#book-form");
	let title = document.querySelector("#title");
	let author = document.querySelector("#author");
	let pages = document.querySelector("#pages");
	let readYet = document.querySelector("#read");

	title.addEventListener("input", (event) => {
		if (title.validity.valueMissing) {
			title.classList.remove("correct");
			title.classList.add("error");
		} else {
			title.classList.add("correct");
			title.classList.remove("error");
		}
	});

	author.addEventListener("input", (event) => {
		if (author.validity.valueMissing) {
			author.classList.remove("correct");
			author.classList.add("error");
		} else {
			author.classList.add("correct");
			author.classList.remove("error");
		}
	});

	pages.addEventListener("input", (event) => {
		if (pages.validity.rangeOverflow) {
			pages.classList.remove("correct");
			pages.classList.add("error");
		} else if (pages.validity.rangeUnderflow) {
			pages.classList.remove("correct");
			pages.classList.add("error");
		} else {
			pages.classList.add("correct");
			pages.classList.remove("error");
		}
	});

	readYet.addEventListener("input", (event) => {
		if (readYet.validity.valueMissing) {
			readYet.classList.remove("correct");
			readYet.classList.add("error");
		}
		if (readYet.value !== "read" || readYet.value !== "not read") {
			readYet.classList.remove("correct");
			readYet.classList.add("error");
		}
		if (readYet.value == "read" || readYet.value == "not read") {
			readYet.classList.add("correct");
			readYet.classList.remove("error");
		}
	});

	form.addEventListener("submit", (event) => {
		function finalControl() {
			if (
				title.validity.valid &&
				author.validity.valid &&
				(pages.validity.valid || pages.validity.valid) &&
				(readYet.value == "read" || readYet.value == "not read")
			) {
				addBookToLibrary();
			} else {
				event.preventDefault();
				showError();
			}
		}

		finalControl();
	});

	function showError() {
		console.log("error");
	}
}

validateForm();
