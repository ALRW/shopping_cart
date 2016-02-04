describe('cartController', function(){
  var ctrl, mockBasketService;

  beforeEach(module('shoppingCart'));

  beforeEach(inject(function($controller){
    mockBasketService = jasmine.createSpyObj('basketService', ['addProduct', 'getProducts']);
    ctrl = $controller('cartController', {basketService:mockBasketService});
  }));

  it('can update the llist of purchases from a service', function(){
    ctrl.pullPurchases();
    expect(mockBasketService.getProducts).toHaveBeenCalled();
  });
});
