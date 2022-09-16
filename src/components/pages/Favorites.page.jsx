import { useContext } from "react";
import FavoritesContext from "../../context/FavoriteContext";
import ProductList from "../products/ProductList";

const Favorites = () => {
  const FavoritesCtx = useContext(FavoritesContext);
  return (
    <div className="page">
      <h2>Favorite products</h2>
      {FavoritesCtx.totalFavorites > 0 ? (
        <ProductList products={FavoritesCtx.favorites} />
      ) : (
        <h4>You don't have any favorites yet.</h4>
      )}
    </div>
  );
};

export default Favorites;
