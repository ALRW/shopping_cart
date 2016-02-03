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
    element.all(by.css('.cart li')).then(function(items){
      expect(items.length).toEqual(0);
    });
  });
});
