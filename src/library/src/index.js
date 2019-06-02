(function(){
    'use strict';

    function App() {
        this.model = new window.app.Model();
        this.controller = new window.app.Controller(this.model);
        this.view = new window.app.View(this.controller);
        
        initialRequest(this.controller, this.view);
    }
    
    window.app = new App();
    console.log(window.app)
}())