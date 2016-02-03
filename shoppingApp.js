(function() {
  var ShoppingApp = angular.module('shoppingCart', []);

  ShoppingApp.controller('catalogueController', ['$http', function($http) {
    var self = this;
    self.products = [];
    self.getCatalogue = function() {
      $http.get('catalogue.json')
        .then(function(response) {
          self.products = response.data;
        }, function(){
          console.log("The catalogue failed to load");
        });
    };
    self.getCatalogue();
  }]);

  ShoppingApp.directive('catalogueView', function() {
    return {
      restrict: "E",
      templateUrl: 'views/catalogue.html',
      controller: 'catalogueController',
      controllerAs: 'catalogueCtrl'
    };
  });

  ShoppingApp.controller('cartController', [function(){
    var self = this;
    self.purchases = [];
  }]);

  ShoppingApp.directive('cartView', function(){
    return {
      restrict: "E",
      templateUrl: 'views/cart.html',
      controller: 'cartController',
      controllerAs: 'cartCtrl'
    };
  });
}());
