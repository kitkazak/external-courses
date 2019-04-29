var booksArr;

window.onload = function() {
    booksArr = booksRequest();
    console.log(booksArr);

    var booksSection = document.getElementById('books');
    booksArr.forEach(function(bookObj) {
        var book = createBook(bookObj);
        booksSection.appendChild(book);
    });
}

function booksRequest() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://rsu-library-api.herokuapp.com/books', false);
    xhr.send();

    return JSON.parse(xhr.responseText);
}

function createBook(bookObj) {
    var bookContainer = document.createElement('div');
        bookContainer.classList.add('book');

    // Create header
    var bookCover = document.createElement('div');
        bookCover.classList.add('book-cover');
        
    var img = new Image();
    img.src = bookObj.image_url;
    img.alt = bookObj.title;
    
    bookCover.appendChild(img);
    bookContainer.appendChild(bookCover);

    // Create header
    var header = document.createElement('h4');
    header.classList.add('book-title');
    header.innerHTML = bookObj.title;
    bookContainer.appendChild(header);

    // Create author span element
    var author = document.createElement('span');
    author.classList.add('book-author');
    author.innerHTML = `${bookObj.author.firstName} ${bookObj.author.lastName}`;
    bookContainer.appendChild(author);

    // Create rating
    var rating = document.createElement('div');
        rating.appendChild(document.createElement('ul'));
        rating.classList.add('book-rating');

    // Create rating's stars
    for (let i = 0; i < 5; i++) {
        var starContainer = document.createElement('li');
        var starIcon = document.createElement('i'); 
        starIcon.classList.add('fa');
        starIcon.classList.add('fa-star');
        starIcon.setAttribute('aria-hidden', 'true');

        starContainer.appendChild(starIcon);
        rating.appendChild(starContainer);
    }
    
    bookContainer.appendChild(rating);

    return bookContainer;
}