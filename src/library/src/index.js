(function(){
    function App() {
        this.model = new window.app.Model();
        this.controller = new window.app.Controller(this.model);
        this.view = new window.app.View(this.controller);
        
        initialRequest(this.model, this.view);
    }
    
    new App();
}())