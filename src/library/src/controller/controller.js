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
    
    // export
    window.app = window.app || {};
    window.app.Controller = Controller;
}())