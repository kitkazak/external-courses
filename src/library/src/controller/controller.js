(function(){
    function Controller(model) {
        this.model = model;
    }
    
    Controller.prototype.getLoadedBooksArr = function() {
        return this.model.getLoadedBooksArr();
    }

    Controller.prototype.getCurrentlyShownBooksArr = function() {
        return this.model.getCurrentlyShownBooksArr();
    }

    Controller.prototype.getBookById = function(id) {
        return this.model.getBookById(id);
    }

    Controller.prototype.filterBooks = function(filterName) {
        this.model.filterBooks(filterName);
    }
    
    // export
    window.app = window.app || {};
    window.app.Controller = Controller;
}())