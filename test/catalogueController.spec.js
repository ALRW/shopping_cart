describe('Catalogue Catalogue', function(){
  var ctrl, mockBasketService;

  beforeEach(module('shoppingCart'));

  beforeEach(inject(function($controller){
    mockBasketService = jasmine.createSpyObj('basketService', ['addProduct', 'getProducts']);
    ctrl = $controller('catalogueController', {basketService:mockBasketService});
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

  it('can use the basket service to add items to a cart', function(){
    ctrl.pushProduct();
    expect(mockBasketService.addProduct).toHaveBeenCalled();
  });

});
