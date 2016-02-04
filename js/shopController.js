ShoppingApp.controller('shopController', ['$http', function($http) {
  var check;
  var self = this;
  self.products = [];
  self.purchases = [];

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

  self.applyDiscount = function(){
    self.correct = null;
    productChecker();
    if(nameChecker('PROMO1')){
      self.total -= 5;
    } else if(nameChecker('PROMO2') && self.total >= 50){
      self.total -=10;
    } else if(nameChecker('PROMO3') && self.total >=75 && check){
      self.total -=15;
    } else {
      self.correct = "That is an incorrect Code";
    }
  };

  var getCatalogue = function() {
    $http.get('catalogue.json')
      .then(function(response) {
        self.products = response.data;
        self.purchases = JSON.parse(JSON.stringify(response.data));
        self.purchases.forEach(function(purchase){
          purchase.quantity = 0;
        });
      });
  };
  getCatalogue();

  var nameChecker = function(name){
    return self.voucherName === name;
  };

  var productChecker = function(){
    self.purchases.forEach(function(purchase){
       var type = purchase.category.split(' ')[1];
      if(type === "Footwear"){
        check = true;
      }
    });
  };


}]);
