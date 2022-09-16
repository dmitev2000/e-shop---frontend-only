import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

const CartItem = ({ product, index }) => {
  const CartCtx = useContext(CartContext);

  function deleteHandler() {
    CartCtx.removeItemFromCart(product.id);
  }

  return (
    <tr>
      <td>{index}</td>
      <td>{product.name}</td>
      <td>{product.amount}</td>
      <td>${(product.price * product.amount).toFixed(2)}</td>
      <td>
        <TooltipComponent
          content="Remove item from cart"
          target=".cart-remove-btn"
        >
          <button className="cart-remove-btn" onClick={deleteHandler}>
            <lord-icon
              src="https://cdn.lordicon.com/gsqxdxog.json"
              trigger="loop-on-hover"
              style={{ width: "32px", height: "32px" }}
            ></lord-icon>
          </button>
        </TooltipComponent>
      </td>
    </tr>
  );
};

export default CartItem;
