import Home from "./components/pages/Home.page";
import Cart from "./components/pages/Cart.page";
import Favorites from "./components/pages/Favorites.page";
import { Routes, Route } from "react-router-dom";
import { FavoritesContextProvider } from "./context/FavoriteContext";
import { CartContextProvider } from "./context/CartContext";
import Navbar from "./components/layout/Navbar";

const AppRouter = () => {
  return (
    <CartContextProvider>
      <FavoritesContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </FavoritesContextProvider>
    </CartContextProvider>
  );
};

export default AppRouter;
