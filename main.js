var viewCartButton = document.getElementsByClassName('view-cart')[0];
var shoppingCart = document.getElementsByClassName('shopping-cart')[0];
var products = document.getElementsByClassName('products')[0];

var cart = [];

viewCartButton.addEventListener('click', function () {
  if (shoppingCart.classList.contains('show')) {
    shoppingCart.className = 'shopping-cart';
  } else {
    shoppingCart.className += ' show';
  }
});

products.addEventListener('click', function (e) {
  if (e.target.classList.contains('add-to-cart')) {
    var itemName = e.target.closest('.item')
      .getAttribute('data-name');

    var itemPrice = e.target.closest('.item')
      .getAttribute('data-price');

    console.log(itemName);
    console.log(itemPrice);

    var product = {
      name: itemName,
      price: itemPrice
    };

    cart.push(product);
    renderCart();
  }
});

var renderCart = function () {
  // TODO: empty `.cart-list`
  var cartList = document.getElementsByClassName('cart-list')[0];

  while(cartList.hasChildNodes()) {
    cartList.removeChild(cartList.firstChild);
  }


  // TODO: loop through _cart_ and create new HTML based on our objects
  var items = '';

  for (var i = 0; i < cart.length; i++) {
    items += '<div>' + cart[i].name
      + ' - $' + cart[i].price + '</div>';
  }

  // TODO: append the new HTML to the page
  
  cartList.innerHTML = items;

  // Finish up the "total" feature
  var total = document.getElementsByClassName('total')[0];
  console.log(total);

  var totalCost = 0;

  for (var i = 0; i < cart.length; i++) {
   totalCost += Number(cart[i].price);
   total.innerHTML = totalCost;
  }

  // Make the Clear Cart button work

};

