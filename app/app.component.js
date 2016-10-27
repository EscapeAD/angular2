(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>Welcome to the zone {{name}}</h1><p>What is the plan? <button (click)="buttonTest()"> {{check}}</button></p>'
    })
    .Class({
      constructor: function() {
        this.name      = 'Newbie';
        this.check     = 'button';
      },
      buttonTest(){
        console.log('Testing round 2');
        if (this.name == 'Number2'){
          this.name = 'OKAY NEWBIE';
          this.check = 'THIS IS NOT A BUTTON'
        } else {
          this.name = 'Number2';
        }
      }
    });
})(window.app || (window.app = {}));
