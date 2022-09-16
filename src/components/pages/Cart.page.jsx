import { useContext } from "react";
import CartContext from "../../context/CartContext";
import CartItemList from "../products/CartItemList";

const Cart = () => {
  const CartCtx = useContext(CartContext);

  return (
    <div className="page">
      <h2>Your cart</h2>
      {CartCtx.totalItems > 0 ? (
        <CartItemList products={CartCtx.cartItems} />
      ) : (
        <h4>Your cart is empty.</h4>
      )}
    </div>
  );
};

export default Cart;
