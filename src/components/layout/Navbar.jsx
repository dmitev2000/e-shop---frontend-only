import { Link } from "react-router-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import "../../styles/Navbar.css";
import logo from "./logo.png";
import { useContext } from "react";
import FavoritesContext from "../../context/FavoriteContext";
import CartContext from "../../context/CartContext";

const Navbar = () => {
  const FavoritesCtx = useContext(FavoritesContext);
  const CartCtx = useContext(CartContext);

  return (
    <nav>
      <div className="nav-brand">
        <Link to="/" className="nav-brand-link">
          <img src={logo} alt="Lorem" />
          <span id="brand-name">Lorem & Ipsum</span>
        </Link>
      </div>
      <div className="nav-links-section">
        <ul>
          <li>
            <TooltipComponent target="#home" content="Home">
              <Link id="home" to="/" className="nav-link">
                <lord-icon
                  id="home"
                  src="https://cdn.lordicon.com/hjbsbdhw.json"
                  trigger="hover"
                  style={{ width: "52px", height: "52px" }}
                >
                  <span className="count-items"></span>
                </lord-icon>
              </Link>
            </TooltipComponent>
          </li>
          <li>
            <TooltipComponent target="#favs" content="Favorites">
              <Link id="favs" to="/favorites" className="nav-link">
                <lord-icon
                  src="https://cdn.lordicon.com/surjmvno.json"
                  trigger="morph"
                  style={{ width: "52px", height: "52px" }}
                >
                  <span className="count-items">{`(${FavoritesCtx.totalFavorites})`}</span>
                </lord-icon>
              </Link>
            </TooltipComponent>
          </li>
          <li>
            <TooltipComponent target="#cart" content="Cart">
              <Link id="cart" to="/cart" className="nav-link">
                <lord-icon
                  src="https://cdn.lordicon.com/ggihhudh.json"
                  trigger="hover"
                  style={{ width: "52px", height: "52px" }}
                ></lord-icon>
                <span className="count-items">${CartCtx.totalPrice().toFixed(2)}</span>
              </Link>
            </TooltipComponent>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
