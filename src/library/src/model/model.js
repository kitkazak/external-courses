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

    // export
    window.app = window.app || {};
    window.app.Model = Model
}())