(function(){
    function Model() {
        this.loadedBooksArr = [];
        this.currentFilter = 'all';
    }

    Model.prototype.getLoadedBooksArr = function() {
        return this.loadedBooksArr;
    }

    Model.prototype.getBookById = function(id) {
        for (let i = 0; i < this.loadedBooksArr.length; i++) {
            if (this.loadedBooksArr[i].id === id) {
                return this.loadedBooksArr[i];
            }
        }

        return null;
    }

    Model.prototype.filterBooks = function() {
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

    Model.prototype.filterBooksBySearch = function(searchWords) {
        var __filteredBooksArr = this.filterBooks();

        var filteredBooksArr = __filteredBooksArr.filter(book => {
            var checkWords = [
                book.author.firstName.toLowerCase(),
                book.author.lastName.toLowerCase()
            ],

            bookTitleWords = book.title.split(' ').map(word => {
                return word.toLowerCase();
            });

            bookTitleWords.forEach(word => {
                checkWords.push(word)
            });

            for (let i = 0; i < checkWords.length; i++) {
                if (searchWords.includes(checkWords[i])) {
                    return true;
                }
            }

            return false;
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