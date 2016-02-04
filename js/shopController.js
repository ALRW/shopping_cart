ShoppingApp.controller('shopController', ['$http', function($http) {
  var self = this;
  self.products = [];
  self.purchases = [];

  self.addPurchase = function(object) {
    self.purchases.forEach(function(purchase){
      if(object.name === purchase.name){
        object.quantity -= 1;
        purchase.quantity += 1;
      }
    });
  };

  self.removePurchase = function(object){
    self.products.forEach(function(product){
      if(object.name === product.name){
        object.quantity -= 1;
        product.quantity += 1;
      }
    });
  };

  var getCatalogue = function() {
    $http.get('catalogue.json')
      .then(function(response) {
        self.products = response.data;
        self.purchases = JSON.parse(JSON.stringify(response.data));
        self.purchases.forEach(function(purchase){
          purchase.quantity = 0;
        });
      }, function() {
        console.log("The catalogue failed to load");
      });
  };
  getCatalogue();

  var updatePurchase = function(purchaseObj, object){
    purchaseObj.quantity = 1;
    object.quantity -= 1;
    self.purchases.push(purchaseObj);
  };

}]);
