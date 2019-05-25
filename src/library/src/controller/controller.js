(function(){
    function Controller(model) {
        this.model = model;
    }
    
    Controller.prototype.getLoadedBooksArr = function() {
        return this.model.getLoadedBooksArr();
    }

    Controller.prototype.getBookById = function(id) {
        return this.model.getBookById(id);
    }

    Controller.prototype.filterBooks = function() {
        return this.model.filterBooks();
    }

    Controller.prototype.filterBooksBySearch = function(searchWords) {
        return this.model.filterBooksBySearch(searchWords);
    }

    Controller.prototype.setCurrentFilter = function(filterName) {
        this.model.setCurrentFilter(filterName);
    }
    
    // export
    window.app = window.app || {};
    window.app.Controller = Controller;
}())