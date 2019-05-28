(function(){
    function Model() {
        this.loadedBooksArr = [];
        this.currentFilter = 'all';
    }

    Model.prototype.setBooksArr = function(arr) {
        this.loadedBooksArr = arr;
    }

    Model.prototype.getLoadedBooksArr = function() {
        return this.loadedBooksArr;
    }

    Model.prototype.getBookById = function(id) {
        var book = this.loadedBooksArr.find(book => {
            return book.id === id
        });

        return book ? book : null
    }

    Model.prototype.getFilterBooks = function() {
        var filteredBooksArr = this.loadedBooksArr.filter(book => {
            switch (this.currentFilter) {
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

        if (this.currentFilter === 'recent') {
            filteredBooksArr.sort((a, b) => {
                return a.createdAt > b.createdAt;
            });
        }

        return filteredBooksArr;
    }

    Model.prototype.getFilterBooksBySearch = function(searchWords) {
        var __filteredBooksArr = this.getFilterBooks();

        var filteredBooksArr = __filteredBooksArr.filter(book => {
            var checkWords = [
                book.author.firstName,
                book.author.lastName
            ]
            .concat(book.title.split(' '))
            .map(word => word.toLowerCase());

            return checkWords.some(word => searchWords.includes(word))
        });

        return filteredBooksArr;
    }

    Model.prototype.setCurrentFilter = function(filterName) {
        this.currentFilter = filterName;
    }

    // export
    window.app = window.app || {};
    window.app.Model = Model
}())