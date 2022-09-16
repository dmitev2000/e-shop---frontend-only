import Product from "./Product";
import '../../styles/Product.css';

const ProductList = ({ products, favs }) => {
  return <div className="productList">
    {products.map((p, i) => {
        return <Product key={i} product={p} favs={favs} />
    })}
  </div>;
};

export default ProductList;
