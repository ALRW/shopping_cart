ShoppingApp.directive('catalogueView', function() {
  return {
    restrict: "E",
    templateUrl: 'views/catalogue.html',
    controller: 'shopController',
    controllerAs: 'shopCtrl'
  };
});
