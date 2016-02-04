ShoppingApp.controller('shopController', ['$http', function($http) {
  var self = this;
  self.products = [];
  self.purchases = [];
  self.total = 0;

  self.addPurchase = function(object) {
    self.purchases.forEach(function(purchase){
      if(object.name === purchase.name){
        object.quantity -= 1;
        purchase.quantity += 1;
        self.calculateTotal();
      }
    });
  };

  self.removePurchase = function(object){
    self.products.forEach(function(product){
      if(object.name === product.name){
        object.quantity -= 1;
        product.quantity += 1;
        self.calculateTotal();
      }
    });
  };

  self.calculateTotal = function(){
    self.total = 0;
    self.purchases.forEach(function(purchase){
      self.total += (purchase.price * purchase.quantity);
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

}]);
