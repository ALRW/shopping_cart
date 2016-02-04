describe('Shopping Cart', function() {
  beforeEach(function(){
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Shopping');
  });

  it('displays the shops products', function(){
    element.all(by.css('.items li')).then(function(items){
      expect(items[0].getText()).toBe("Almond Toe Court Shoes, Patent Black");
    });
  });

  it('displays a blank shopping cart', function(){
    var title = element(by.css('h2')).getText();
    expect(title).toBe("Shopping Cart");
  });

  it('can place items from the catalogue into the shopping cart', function(){
    element.all(by.css('.items button')).first().click();
    element.all(by.css('.cart li')).then(function(purchases){
      expect(purchases[0].getText()).toBe("Almond Toe Court Shoes, Patent Black");
    });
  });

  it('can remove an item from the shopping cart', function(){
    element.all(by.css('.items button')).first().click();
    element.all(by.css('.cart button')).first().click();
    element.all(by.css('.items li')).then(function(items){
      expect(items[3].getText()).toBe('5');
    });
  });

  it('shows the total cost of items in the cart', function(){
    for(var i = 0; i < 3; i++){
    element.all(by.css('.items button')).first().click();
    }
    element.all(by.css('.items button')).last().click();
    expect(element(by.css('.total')).getText()).toEqual("Total: £837.00");
  });

  it('allows a voucher to be used', function(){
    for(var i = 0; i < 3; i++){
    element.all(by.css('.items button')).first().click();
    }
    element.all(by.css('.items button')).last().click();
    element(by.css('input')).sendKeys('PROMO1');
    element(by.css('.discounts button')).click();
    expect(element(by.css('.total')).getText()).toEqual("Total: £832.00");
  });

  it('raises and alert when an incorrect voucher is used', function(){
    element(by.css('input')).sendKeys('PROMO5');
    element(by.css('.discounts button')).click();
    expect(element(by.css('h4')).getText()).toEqual("That is an incorrect Code");
  });
});
