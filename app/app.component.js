(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>Welcome to the zone</h1><p>What is the plan?</p>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
