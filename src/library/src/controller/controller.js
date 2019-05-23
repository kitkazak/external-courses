(function(){
    function Controller(model) {
        this.model = model;
    }
    
    Controller.prototype.getBooks = function() {
        return this.model.loadedBooksArr;
    }
    
    // export
    window.app = window.app || {};
    window.app.Controller = Controller;
}())