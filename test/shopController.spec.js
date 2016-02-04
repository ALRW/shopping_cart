describe('Catalogue Catalogue', function(){
  var ctrl, mockItem, mockPurchase;

  beforeEach(module('shoppingCart'));

  beforeEach(inject(function($controller, $injector){
    ctrl = $controller('shopController');
    $httpBackend = $injector.get('$httpBackend');
  }));

  beforeEach(function(){
    ctrl.products = mockItem = [{
      "name":"Almond Toe Court Shoes, Patent Black",
      "category": "Women’s Footwear",
      "price": 99.00,
      "quantity": 5
    }];
    ctrl.purchases = mockPurchase = [{
      "name":"Almond Toe Court Shoes, Patent Black",
      "category": "Women’s Footwear",
      "price": 99.00,
      "quantity": 0
    }];
  });


  xit('loads a json file', inject(function($http){
    $httpBackend
    .expect('GET', 'catalogue.json')
    .respond(200, mockItem);
    $httpBackend.flush();
    console.log(ctrl.products);
    expect(ctrl.products).toEqual(mockItem);
  }));

  it('can add a product from the catalogue to purchases', function(){

    ctrl.addPurchase(mockItem[0]);
    expect(ctrl.purchases[0].quantity).toEqual(1);
  });

  it('can increase the quantity of an ordered item', function(){

    for(var i = 0; i < 5; i ++){
      ctrl.addPurchase(mockItem[0]);
    }
    expect(ctrl.purchases[0].quantity).toEqual(5);
  });

  it('adding a product to the cart reduces the number of the item in stock', function(){

    ctrl.addPurchase(mockItem[0]);
    expect(mockItem[0].quantity).toEqual(4);
  });

});
