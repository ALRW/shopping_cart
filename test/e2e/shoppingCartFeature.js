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
    element.all(by.css('.cart li')).then(function(purchases){
      expect(purchases.length).toEqual(0);
    });
  });

  it('can place items from the catalogue into the shopping cart', function(){
    element.all(by.css('.items button')).first().click();
    element.all(by.css('.cart li')).then(function(purchases){
      expect(purchases.length).toEqual(4);
      expect(purchases[0].getText()).toBe("Almond Toe Court Shoes, Patent Black");
    });
  });
});
