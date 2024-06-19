const library = [];

const mainContentContainer = document.getElementById('main-content');
const titleFromInput = document.getElementById('title');
const authorFromInput = document.getElementById('author');
const pagesFromInput = document.getElementById('pages');
const hasReadFromInput = document.getElementById('read');
const addBookButton = document.getElementById('add-book');

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
}


addBookButton.addEventListener("click", function () 
{
    addBookToLibrary();
    titleFromInput.value = pagesFromInput.value = authorFromInput.value = ''; // clear inputs
});


// initial books to add
const testbook1 = new Book('test', 'testa', 100, true);
const testbook2 = new Book('test2', 'testa2', 102, false);
library.push(testbook1);
library.push(testbook2);
// loop through initial books, add to library
for (let i = 0; i < library.length; i++) {
    const newBook = document.createElement('div');
    newBook.className = 'new-book';
    newBook.textContent = "Title: " +  library[i].title;
    mainContentContainer.appendChild(newBook); 
}


