ShoppingApp.controller('catalogueController', ['$http', 'basketService', function($http, basketService) {
  var self = this;
  self.products = [];

  self.pushProduct = function(object){
    basketService.addProduct(object);
  };

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
