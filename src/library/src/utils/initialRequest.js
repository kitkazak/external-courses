function initialRequest(controller, view) {
  var response;

  fetch("https://rsu-library-api.herokuapp.com/books")
    .then(res => res.json())
    .then(res => {
      var __controller = controller,
        __view = view;
      __controller.setBooksArr(res);
      __view.renderBooks(res);
    });
}
