var ShoppingApp = angular.module('shoppingCart', []);

ShoppingApp.controller('catalogueController', ['$http', function($http){
  var self = this;
  self.products = [];
  self.getCatalogue = function(){
    $http.get('catalogue.json')
    .then(function(response){
      console.log("response");
      self.products = response.data;
    });
  };
}]);

ShoppingApp.directive('catalogueView', function(){
  return{
    restrict: "E",
    templateUrl: 'views/catalogue.html',
    controller: 'catalogueController',
    controllerAs: 'catalogueCtrl'
  };
});
