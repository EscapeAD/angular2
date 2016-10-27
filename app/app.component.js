(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>Welcome to the zone {{name}}</h1><p>What is the plan?</p>'
    })
    .Class({
      constructor: function() {
        this.name = 'Newbie';
      }
    });
})(window.app || (window.app = {}));
