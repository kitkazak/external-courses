(function(){
    function Model() {
        this.loadedBooksArr = booksRequest();
    }

    // export
    window.app = window.app || {};
    window.app.Model = Model
}())