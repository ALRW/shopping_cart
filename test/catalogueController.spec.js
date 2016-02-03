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
    $httpBackend
    .expect('GET', 'catalogue.json')
    .respond(200, {foo:'bar'});
    $httpBackend.flush();
    expect(ctrl.products).toEqual({foo:'bar'});
  }));
});
