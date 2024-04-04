import { useContext } from "react";

import { PorductsContext } from "../../context/products.contex";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(PorductsContext);
  return (
    <div className="products-container">
      {products.map((product) => {
        <ProductCard key={products.id} product={product} />;
      })}
    </div>
  );
};

export default Shop;
