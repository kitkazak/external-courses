const booksRequest = () => {
    const url = 'https://rsu-library-api.herokuapp.com/books';

    fetch(url)
    .then(res => res.json())
    .then(JSONToBooks)
    .catch(console.log)

    function JSONToBooks(JSON) {
        var booksSection = document.querySelector('.books__container');
        JSON.forEach(function(obj) {
            var book = new Book(obj);
            booksSection.append(book.getDOMElement())
        })
    }
}

window.addEventListener('load', booksRequest);