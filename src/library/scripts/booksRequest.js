var booksArr;

window.onload = function() {
    booksArr = booksRequest();

    var booksSection = document.querySelector('.books');
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
        bookCover.classList.add('book__cover');
        
    var img = new Image();
    img.src = bookObj.image_url;
    img.alt = bookObj.title;
    
    bookCover.appendChild(img);
    bookContainer.appendChild(bookCover);

    // Create header
    var header = document.createElement('h4');
    header.classList.add('book__title');
    header.innerHTML = bookObj.title;
    bookContainer.appendChild(header);

    // Create author span element
    var author = document.createElement('span');
    author.classList.add('book__author');
    author.innerHTML = `by ${bookObj.author.firstName} ${bookObj.author.lastName}`;
    bookContainer.appendChild(author);

    // Create rating
    var rating = document.createElement('div');
        rating.classList.add('book__rating');

    rating.appendChild(setRating(bookObj.rating));
    bookContainer.appendChild(rating);

    return bookContainer;
}

function setRating(bookObjRating) {
    var rating = bookObjRating,
        ratingContainer = document.createElement('ul');

    for (let i = 0; i < 5; i++) {
        var starContainer = document.createElement('li');
            starIcon = document.createElement('i');

        starIcon.setAttribute('aria-hidden', 'true');
        starIcon.classList.add('fa-star');
        
        if (rating) {
            starIcon.classList.add('fa');
            rating--;
        } else {
            starIcon.classList.add('far');
        }

        starContainer.appendChild(starIcon);
        ratingContainer.appendChild(starContainer);
    }

    return ratingContainer;
}