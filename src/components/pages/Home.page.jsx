import { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "../products/ProductList";
import Spinner from '../../components/layout/Spinner'; 

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        "https://eshop-6ec42-default-rtdb.europe-west1.firebasedatabase.app/products.json"
      )
      .then((response) => {
        setProducts(response.data);
        setIsLoading(false);
      });
  }, [setProducts]);

  if (isLoading) {
    return (
      <div style={{textAlign: 'center', minHeight: '100vh', paddingTop: '200px'}}>
        <Spinner />
      </div>
    );
  }

  return (
    <div className="page">
      <h1 style={{ textAlign: "center" }}>Explore products</h1>
      <ProductList products={products} favs="false" />
    </div>
  );
};

export default Home;
