describe('basketService', function(){
  var basketService;
  beforeEach(module('shoppingCart'));

  beforeEach(inject(function(_basketService_){
    basketService = _basketService_;
  }));

  it('can add a product to the purchaseList', function(){
    basketService.addProduct({foo: "bar"});
    expect(basketService.getProducts()).toEqual([{foo: "bar"}]);
  });
});
