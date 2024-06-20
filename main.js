const library = [];

const mainContentContainer = document.getElementById('main-content');
const titleFromInput = document.getElementById('title');
const authorFromInput = document.getElementById('author');
const pagesFromInput = document.getElementById('pages');
const hasReadFromInput = document.getElementById('read');
const addBookButton = document.getElementById('add-book');
const submitButton = document.getElementById('submit');
const readStatus = true;
const overlay = document.getElementById('overlay');


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
    const newBook = new Book(titleFromInput.value, authorFromInput.value, pagesFromInput.value, hasReadFromInput.checked);
    library.push(newBook);
    createBookCard(newBook);
    titleFromInput.value = pagesFromInput.value = authorFromInput.value = ''; // clear inputs
    hasReadFromInput.checked = false;
    closeModal();
}
function createBookCard(newBook) {
    // create a "card" listing all the information of the book, with a Read and Remove button
    const newBookDiv = document.createElement('div');
    newBookDiv.className = "new-book"
    const title = document.createElement('div');
    title.id = "titleCard";
    title.textContent = newBook.title;
    const author = document.createElement('div');
    author.id = "authorCard";
    author.textContent = "by " + newBook.author;
    const pages = document.createElement('div');
    pages.id = "pagesCard";
    pages.textContent = newBook.pages + " pages";
    const readButton = document.createElement('button');
    readButton.id = "readCard";
    readStatus();
    const removeButton = document.createElement('button');
    removeButton.id = "removeCard";
    removeButton.textContent = "Remove";
        

    newBookDiv.appendChild(title);
    newBookDiv.appendChild(author);
    newBookDiv.appendChild(pages);
    newBookDiv.appendChild(readButton);
    newBookDiv.appendChild(removeButton);
    mainContentContainer.appendChild(newBookDiv);

    readButton.addEventListener("click", function() {
        // this feels a little redudant/messy but i guess it works
        newBook.read = newBook.read ? false : true;
        readStatus();
    })

    removeButton.addEventListener("click", function() {
        newBookDiv.remove();
    })
    function readStatus() {
    if (newBook.read == true) {
        readButton.textContent = "Read";
        newBookDiv.classList.add('readTrue');
    }
    else {
        readButton.textContent = "Not read";
        newBookDiv.classList.remove('readTrue');
    }}

}
function updateReadText(newBook) {
    
}
function openModal() {
    modal.classList.add('active');
    overlay.classList.add('active');
}
function closeModal() {
    modal.classList.remove('active');
    overlay.classList.remove('active');
}
function removeBook() {
    const bookDiv = removeButton.parentNode;
    bookDiv.remove();
}
addBookButton.addEventListener("click", openModal);

submitButton.addEventListener("click", addBookToLibrary);

overlay.addEventListener('click', function() {
    closeModal();
});


// initial books to add
//const testbook1 = new Book('Placeholder Book 1', 'Author 1', 100, true);
//const testbook2 = new Book('Placeholder Book 2', 'Author 2', 200, false);
//library.push(testbook1);
//library.push(testbook2);
// loop through initial books, add to library
for (let i = 0; i < library.length; i++) {
    const newBook = document.createElement('div');
    newBook.className = 'new-book';
    newBook.textContent = "Title: " +  library[i].title;
    mainContentContainer.appendChild(newBook); 
}


