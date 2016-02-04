ShoppingApp.directive('catalogueView', function() {
  return {
    restrict: "E",
    templateUrl: 'views/shop.html',
    controller: 'shopController',
    controllerAs: 'shopCtrl'
  };
});
