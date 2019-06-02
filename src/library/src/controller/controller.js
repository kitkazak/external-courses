(function(){
    'use strict';

    function Controller(model) {
        this.model = model;
    }

    Controller.prototype.addNewBook = function(newBook) {
        this.model.addNewBook(newBook)
    }

    Controller.prototype.getLastBookId = function() {
        return this.model.getLastBookId();
    }
    
    Controller.prototype.setBooksArr = function(arr) {
        this.model.setBooksArr(arr)
    }

    Controller.prototype.getLoadedBooksArr = function() {
        return this.model.getLoadedBooksArr();
    }

    Controller.prototype.getBookById = function(id) {
        return this.model.getBookById(id);
    }

    Controller.prototype.getFilterBooks = function() {
        return this.model.getFilterBooks();
    }

    Controller.prototype.getFilterBooksBySearch = function(searchWords) {
        return this.model.getFilterBooksBySearch(searchWords);
    }

    Controller.prototype.setCurrentFilter = function(filterName) {
        this.model.setCurrentFilter(filterName);
    }
    
    // export
    window.app = window.app || {};
    window.app.Controller = Controller;
}())