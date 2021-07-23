var viewCartButton = document.getElementsByClassName('view-cart')[0];
var clearCartButton = document.getElementsByClassName('clear-cart')[0];

var shoppingCart = document.getElementsByClassName('shopping-cart')[0];
var products = document.getElementsByClassName('products')[0];

var cart = [];
var total = 0;

viewCartButton.addEventListener('click', function () {
  if (shoppingCart.classList.contains('show')) {
    shoppingCart.className = 'shopping-cart';
  } else {
    shoppingCart.className += ' show';
  }
});


clearCartButton.addEventListener('click', function() {
  cart = [];
  total = 0;

  renderCart();
  renderTotal();

});

products.addEventListener('click', function (e) {
  if (e.target.classList.contains('add-to-cart')) {
    var itemName = e.target.closest('.item')
      .getAttribute('data-name');

    var itemPrice = e.target.closest('.item')
      .getAttribute('data-price');

    var product = {
      name: itemName,
      price: itemPrice
    };

    cart.push(product);
    total += Number(product.price);
    console.log(total);
    renderCart();
    renderTotal();
  }
});

var renderTotal = function() {
  var totalElement = document.getElementsByClassName('total')[0];

  totalElement.innerHTML = total;
};



var renderCart = function () {
  // TODO: empty `.cart-list`
  var cartList = document.getElementsByClassName('cart-list')[0];

  while(cartList.hasChildNodes()) {
    cartList.removeChild(cartList.firstChild);
  };

  // TODO: loop through _cart_ and create new HTML based on our objects
var items = '';

  for (var i = 0; i < cart.length; i++) {
    items += '<div>' + cart[i].name
      + ' - $' + cart[i].price + '</div>';
  };

  // TODO: append the new HTML to the page
  cartList.innerHTML = items;

}


