import { useSelector } from "react-redux";
import Product from "./Product";

const Products = () => {
  const products = useSelector((state) => state.products.items);

  return (
    <div>
      {products.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
};

export default Products;
