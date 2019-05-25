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

    // export
    window.app = window.app || {};
    window.app.Model = Model
}())