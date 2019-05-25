function SearchForm(DOMElement) {
    var elem = DOMElement,
    textInput = elem.querySelector('input');
    
    var handleKeyPress = debounce(__handleKeyPress);
    elem.addEventListener('keypress', handleKeyPress);

    function __handleKeyPress() {
        var searchWords = (textInput.value).split(' ').map(word => word.toLowerCase());
        console.log(searchWords);

        var filteredBySearchWordsBooks = currentlyShownBooksArr.filter(book => {
            var booksCheckWords = [],
            booksAuthorFirstName = book.author.firstName,
            booksAuthorLastName = book.author.lastName,

            booksTitleWords = book.title;
            booksTitleWords = booksTitleWords.split(' ').map(word => word.toLowerCase());

            booksTitleWords.forEach(word => {
                booksCheckWords.push(word)
            });
            booksCheckWords.push(booksAuthorFirstName.toLowerCase());
            booksCheckWords.push(booksAuthorLastName.toLowerCase());

            if (searchWords.some(word => booksCheckWords.includes(word))) {
                return true
            }

            return false;
        });

        currentlyShownBooksArr = filteredBySearchWordsBooks;
        renderBooks(filteredBySearchWordsBooks);
    }
}

var searchForm = new SearchForm(document.querySelector('#main__search-form'));