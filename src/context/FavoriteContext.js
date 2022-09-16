import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (product) => {},
    removeFavorite: (productId) => {},
    itemIsFavorite: (cartoonId) => {}
});

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(product) {
        setUserFavorites((prev) => {
            return prev.concat(product);
        });
    }

    function removeFavoriteHandler(productId) {
        setUserFavorites((prev) => {
            return prev.filter(product => product.id !== productId);
        })
    }

    function itemIsFavoriteHandler(productId) {
        return userFavorites.some(p => p.id === productId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;