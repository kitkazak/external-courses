function filterBooks(filterName) {
    var filteredBooksArr = loadedBooksArr.filter(book => {
        switch (filterName) {
            case 'popular': 
                if (book.rating === 5) return true;
                break;
            case 'free': 
                if (book.cost === 0) return true;
                break;
            default:
                return true;
        }

        return false;
    });

    if (filterName === 'recent') {
        filteredBooksArr.sort((a, b) => {
            return a.createdAt > b.createdAt;
        });
    }

    currentlyShownBooksArr = filteredBooksArr;
    renderBooks(filteredBooksArr);
}

function renderBooks(booksArr) {
    var booksContainer = document.querySelector('.books__container');
    booksContainer.innerHTML = '';

    for (let i = 0; i < booksArr.length; i++) {
        var book = new Book(booksArr[i]);
        booksContainer.appendChild(book.getDOMElement());
    }
}