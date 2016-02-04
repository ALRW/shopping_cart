describe('Catalogue Catalogue', function(){
  var ctrl;

  beforeEach(module('shoppingCart'));

  beforeEach(inject(function($controller){
    ctrl = $controller('shopController');
  }));

  beforeEach(function(){
    ctrl.products = [{
      "name":"Almond Toe Court Shoes, Patent Black",
      "category": "Women’s Footwear",
      "price": 99.00,
      "quantity": 5
    }];
    ctrl.purchases = [{
      "name":"Almond Toe Court Shoes, Patent Black",
      "category": "Women’s Footwear",
      "price": 99.00,
      "quantity": 0
    }];
  });

  it('can add a product from the catalogue to purchases', function(){
    ctrl.addPurchase(ctrl.products[0]);
    expect(ctrl.purchases[0].quantity).toEqual(1);
  });

  it('can increase the quantity of an ordered item', function(){
    for(var i = 0; i < 5; i ++){
      ctrl.addPurchase(ctrl.products[0]);
    }
    expect(ctrl.purchases[0].quantity).toEqual(5);
  });

  it('adding a product to the cart reduces the quantity left', function(){
    ctrl.addPurchase(ctrl.products[0]);
    expect(ctrl.products[0].quantity).toEqual(4);
  });

  it('can remove and items from the cart', function(){
    ctrl.addPurchase(ctrl.products[0]);
    ctrl.removePurchase(ctrl.purchases[0]);
    expect(ctrl.products[0].quantity).toEqual(5);
  });

  it('can calculate the total cost of purchases', function(){
    ctrl.purchases = [{
      "name":"Almond Toe Court Shoes, Patent Black",
      "category": "Women’s Footwear",
      "price": 99.00,
      "quantity": 5
    }];
    ctrl.calculateTotal();
    expect(ctrl.total).toEqual(495.00);
  });

  it('£5 dicount when given code PROMO1', function(){
    ctrl.voucherName = 'PROMO1';
    ctrl.total = 5;
    ctrl.applyDiscount();
    expect(ctrl.total).toEqual(0);
  });

  it('£10 discount when given PROMO2 and total is > 50', function(){
    ctrl.voucherName = 'PROMO2';
    ctrl.total = 55;
    ctrl.applyDiscount();
    expect(ctrl.total).toEqual(45);
  });

  it('£15 discount when PROMO3 and total > 75 and Footwear included', function(){
    ctrl.voucherName = 'PROMO3';
    ctrl.total = 105;
    ctrl.applyDiscount();
    expect(ctrl.total).toEqual(90);
  });

  it('alerts me when I have applied an incorrect voucher code', function(){
    ctrl.voucherName = 'PROMO3';
    ctrl.applyDiscount();
    expect(ctrl.correct).toBe('That is an incorrect Code');
  });

});
