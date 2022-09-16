import "../../styles/Product.css";
import "../../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import FavoritesContext from "../../context/FavoriteContext";
import CartContext from "../../context/CartContext";
import { useContext, useRef, useState } from "react";
import {
  DialogComponent,
  TooltipComponent,
} from "@syncfusion/ej2-react-popups";

const Product = ({ product, favs }) => {
  const FavoritesCtx = useContext(FavoritesContext);
  const CartCtx = useContext(CartContext);
  const itemIsFavorite = FavoritesCtx.itemIsFavorite(product.id);
  const amountInputRef = useRef();
  const [visibility, setDialogVisibility] = useState(false);

  function dialogClose() {
    setDialogVisibility(false);
  }
  function onOverlayClick() {
    setDialogVisibility(false);
  }

  function addHandler() {
    if (!itemIsFavorite) {
      FavoritesCtx.addFavorite({
        id: product.id,
        name: product.name,
        picture: product.picture,
        price: product.price,
        inStock: product.inStock,
      });
    }
  }

  function removeHandler() {
    if (itemIsFavorite) {
      FavoritesCtx.removeFavorite(product.id);
    }
  }

  function submitHandler(e) {
    e.preventDefault();
    setDialogVisibility(true);
    CartCtx.addItemToCart(product, parseInt(amountInputRef.current.value));
    amountInputRef.current.value = "";
  }

  return (
    <div className="product">
      <h4>{product.name}</h4>
      <img src={product.picture} alt={product.name} />
      {favs ? (
        <button className="toFavorites" onClick={addHandler}>
          {itemIsFavorite ? (
            <TooltipComponent content="Favorite product">
              <span>
                <i className="bi bi-star-fill"></i>
              </span>
            </TooltipComponent>
          ) : (
            <TooltipComponent content="Add product to favorites">
              <span>
                <i className="bi bi-star"></i>
              </span>
            </TooltipComponent>
          )}
        </button>
      ) : (
        <button className="removeFromFavorites" onClick={removeHandler}>
          <TooltipComponent content="Remove from favorites">
            <span>
              <i className="bi bi-x-lg"></i>
            </span>
          </TooltipComponent>
        </button>
      )}
      <div className="product-footer">
        <span>${product.price}</span>
        {product.inStock ? (
          <TooltipComponent content="In stock" target={"#product" + product.id}>
            <span id={"product" + product.id}>
              <lord-icon
                src="https://cdn.lordicon.com/hrqqslfe.json"
                trigger="hover"
                colors="primary:#ffffff,secondary:#7bae37"
                style={{ width: "32px", height: "32px" }}
              ></lord-icon>
            </span>
          </TooltipComponent>
        ) : (
          <TooltipComponent
            content="Out of stock"
            target={"#product" + product.id}
          >
            <span id={"product" + product.id}>
              <lord-icon
                src="https://cdn.lordicon.com/ymerwkwd.json"
                trigger="hover"
                colors="primary:#ffffff,secondary:#e83a30"
                style={{ width: "32px", height: "32px" }}
              ></lord-icon>
            </span>
          </TooltipComponent>
        )}
      </div>
      <form onSubmit={submitHandler}>
        <label>Amount:</label>
        <input type="number" min={1} required ref={amountInputRef} />
        <button type="submit" className="toCartBtn" disabled={!product.inStock}>
          Add to cart
        </button>
      </form>
      <DialogComponent
        target='body'
        width="400px"
        isModal={true}
        animationSettings={{ effect: "Zoom", duration: 400, delay: 0 }}
        close={dialogClose}
        overlayClick={onOverlayClick}
        visible={visibility}
        showCloseIcon={true}
        buttons={[
          {
            buttonModel: {
              content: "Close",
              isPrimary: true,
            },
            click: () => {
              dialogClose();
            },
          }
        ]}
      >
        <p>Added to cart - {product.name}</p>
      </DialogComponent>
    </div>
  );
};

export default Product;
