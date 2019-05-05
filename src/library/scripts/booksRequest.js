var booksArr;

window.onload = function() {
    booksArr = booksRequest();

    var booksSection = document.querySelector('.books__container');
    booksArr.forEach(function(bookObj) {
        var book = new Book(bookObj);
        booksSection.appendChild(book.getDOMElement());
    });
}

function booksRequest() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://rsu-library-api.herokuapp.com/books', false);
    xhr.send();

    return JSON.parse(xhr.responseText);
}