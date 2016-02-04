ShoppingApp.directive('cartView', function(){
  return {
    restrict: "E",
    templateUrl: 'views/cart.html',
    controller: 'cartController',
    controllerAs: 'cartCtrl'
  };
});
