(function(){
    function Model() {
        this.loadedBooksArr = [];
        this.currentlyShownBooksArr = [];
    }

    Model.prototype.getLoadedBooksArr = function() {
        return this.loadedBooksArr;
    }

    Model.prototype.getCurrentlyShownBooksArr = function() {
        return this.currentlyShownBooksArr;
    }

    Model.prototype.getBookById = function(id) {
        for (let i = 0; i < this.loadedBooksArr.length; i++) {
            if (this.loadedBooksArr[i].id === id) {
                return this.loadedBooksArr[i];
            }
        }

        return null;
    }

    Model.prototype.filterBooks = function(filterName) {
        var filteredBooksArr = this.loadedBooksArr.filter(book => {
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

        this.currentlyShownBooksArr = filteredBooksArr;
    }

    // export
    window.app = window.app || {};
    window.app.Model = Model
}())