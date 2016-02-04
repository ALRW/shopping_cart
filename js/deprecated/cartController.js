ShoppingApp.controller('cartController', ['basketService', function(basketService){
  var self = this;
  self.purchases = [];

  self.pullPurchases = function(){
    self.purchases = basketService.getProducts();
  };
}]);
