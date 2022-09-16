import CartItem from "./CartItem";
import "../../styles/Cart.css";
import CartContext from "../../context/CartContext";
import { useContext } from "react";

const CartItemList = ({ products }) => {
  const CartCtx = useContext(CartContext);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Amount</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            return (
              <CartItem key={product.id} index={index + 1} product={product} />
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td style={{textAlign: "right"}} colSpan={5}>Total: ${CartCtx.totalPrice().toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default CartItemList;
