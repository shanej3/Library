const library = [];

const mainContentContainer = document.getElementById('main-content');
const titleFromInput = document.getElementById('title');
const authorFromInput = document.getElementById('author');
const pagesFromInput = document.getElementById('pages');
const hasReadFromInput = document.getElementById('read');
const addBookButton = document.getElementById('add-book');
const submitButton = document.getElementById('submit');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read;
    };
}
function addBookToLibrary() {
    const newBook = new Book(titleFromInput.value, authorFromInput.value, pagesFromInput.value, true);
    library.push(newBook);
    const newBookDiv = document.createElement('div');
    newBookDiv.className = 'new-book';
    newBookDiv.textContent = "Title: " +  newBook.title;
    mainContentContainer.appendChild(newBookDiv);
    titleFromInput.value = pagesFromInput.value = authorFromInput.value = ''; // clear inputs
    closeModal();
}
function openModal() {
    modal.classList.add('active');
    overlay.classList.add('active');
}
function closeModal() {
    modal.classList.remove('active');
    overlay.classList.remove('active');
}
addBookButton.addEventListener("click", openModal);


submitButton.addEventListener("click", addBookToLibrary);


// initial books to add
const testbook1 = new Book('Placeholder Book 1', 'Author 1', 100, true);
const testbook2 = new Book('Placeholder Book 2', 'Author 2', 200, false);
library.push(testbook1);
library.push(testbook2);
// loop through initial books, add to library
for (let i = 0; i < library.length; i++) {
    const newBook = document.createElement('div');
    newBook.className = 'new-book';
    newBook.textContent = "Title: " +  library[i].title;
    mainContentContainer.appendChild(newBook); 
}


