// cart.service.js

var cartItems = [];

const getCartItems = function () {
  return cartItems
} 

const addToCart = item => {
  const itemInCart = cartItems.find(currentItem => item.id === currentItem.id);
  if( itemInCart ) {
    itemInCart.quantity++;
  } else {
    item.quantity = 1;
    cartItems.push(item);
  }
  console.log(cartItems);
}

const substractFromCart = currItem => {
  const itemIndex = cartItems.findIndex(item => item.id === currItem.id);
  if( itemIndex > -1 ) {
    if( cartItems[itemIndex].quantity > 1 ) {
      cartItems[itemIndex].quantity--;
    } else {
      cartItems.splice(itemIndex, 1);
    }
  }
  console.log(cartItems);
}

const clearItem = itemId => {
  const itemIndex = cartItems.findIndex(item => item.id === itemId);
  if( itemIndex > -1 ) {
    cartItems.splice(itemIndex, 1);
  }
}

const getCartTotal = () => {
  return cartItems.reduce(( acc, item ) => {
    return acc + (item.quantity * item.price);
  }, 0);
}

export default {
  substractFromCart,
  getCartItems,
  clearItem,
  addToCart,
  getCartTotal
}