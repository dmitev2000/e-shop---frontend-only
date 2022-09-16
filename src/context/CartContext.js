import { createContext, useState } from "react";

const CartContext = createContext({
  cartItems: [],
  totalItems: 0,
  totalPrice: () => {},
  addItemToCart: (item) => {},
  removeItemFromCart: (itemId) => {},
  isItemInCart: (itemId) => {},
});

export function CartContextProvider(props) {
  const [cartItems, setCartItems] = useState([]);

  function addItemToCartHandler(item, amount) {
    if (isItemInCartHandler(item.id)) {
      let product = cartItems.find((i) => i.id === item.id);
      product.amount += amount;
    } else {
      item.amount = amount;
      setCartItems((prev) => {
        return prev.concat(item);
      });
    }
  }

  function removeItemFromCartHandler(itemId) {
    setCartItems((prev) => {
      return prev.filter((item) => item.id !== itemId);
    });
  }

  function totalPriceHandler() {
    let total = 0;
    cartItems.forEach((item) => {
      if (item.amount) {
        total += item.price * item.amount;
      } else {
        total += item.price;
      }
    });
    return total;
  }

  function isItemInCartHandler(itemId) {
    return cartItems.some((item) => item.id === itemId);
  }

  const context = {
    cartItems: cartItems,
    totalItems: cartItems.length,
    totalPrice: totalPriceHandler,
    addItemToCart: addItemToCartHandler,
    removeItemFromCart: removeItemFromCartHandler,
    isItemInCart: isItemInCartHandler,
  };

  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;
