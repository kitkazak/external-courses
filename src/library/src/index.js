(function(){
    function App() {
        this.model = new window.app.Model();
        this.controller = new window.app.Controller(this.model);
        this.view = new window.app.View(this.controller);

        fetch('https://rsu-library-api.herokuapp.com/books').
        then(res => res.json()).
        then(handleResponse);

        var model = this.model,
        view = this.view;
        function handleResponse(response) {
            model.loadedBooksArr = response;
            model.currentlyShownBooksArr = response;
            view.renderBooks();
        }
    }
    
    var library = new App();

    // export
    window.library = library;
    console.log(window.library);
}())