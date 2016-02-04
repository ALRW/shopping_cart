ShoppingApp.service('basketService', function(){
  var productList = [];

  var addProduct = function(newObject){
    productList.push(newObject);
  };

  var getProducts = function(){
    return productList;
  };

  return {
    addProduct: addProduct,
    getProducts: getProducts
  };
});
