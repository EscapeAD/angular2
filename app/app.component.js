(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>Welcome to the zone {{name}}</h1><p>What is the plan? <button (click)="buttonTest()"> Conole.log</button></p>'
    })
    .Class({
      constructor: function() {
        this.name = 'Newbie';
      },
      buttonTest(){
        console.log('Testing round 2');
        if (this.name == 'Number2'){
          this.name = 'OKAY NEWBIE';
        } else {
          this.name = 'Number2';
        }
      }
    });
})(window.app || (window.app = {}));
