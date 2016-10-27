(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>This is my first angular app</h1>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
