function Controller(model) {
    this.model = model;
}

Controller.prototype.getBooks = function() {
    return this.model.loadedBooksArr;
}