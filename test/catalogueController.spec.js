describe('Catalogue Catalogue', function(){
  var $scope, ctrl;
  beforeEach(module('shoppingCart'));

  beforeEach(inject(function($controller){
    ctrl = $controller('catalogueController', {$scope: $scope});
  }));

  beforeEach(inject(function($injector){
    $httpBackend = $injector.get('$httpBackend');
  }));

  it('loads a json file', inject(function($http){
    ctrl.getCatalogue();
    $httpBackend
    .expect('GET', 'catalogue.json')
    .respond(200, {foo:'bar'});
    expect($httpBackend.flush).not.toThrow();
    expect(ctrl.products).toEqual({foo:'bar'});
  }));
});
