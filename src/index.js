import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { registerLicense } from "@syncfusion/ej2-base";
import AppRouter from "./AppRouter";
import { FavoritesContextProvider } from "./context/FavoriteContext";

registerLicense(
  "ORg4AjUWIQA/Gnt2VVhiQlFadVlJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdkJhW35Zc3RUT2RaWUM="
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FavoritesContextProvider>
    <Router>
      <AppRouter />
    </Router>
  </FavoritesContextProvider>
);
