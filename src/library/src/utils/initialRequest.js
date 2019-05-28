function initialRequest(model, view) {
    var response;
    
    fetch('https://rsu-library-api.herokuapp.com/books').
    then(res => res.json()).
    then(res => {
        var __model = model,
        __view = view;
        __model.loadedBooksArr = res;
        __view.renderBooks(res);
    });
}