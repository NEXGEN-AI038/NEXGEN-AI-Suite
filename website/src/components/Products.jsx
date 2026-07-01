import "./Products.css";
import ProductCard from "./ProductCard";
import { products } from "../data/products";

function Products() {
  return (
    <section className="products">

      <h2>Featured AI Products</h2>

      <div className="product-grid">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            icon={product.icon}
            title={product.title}
            description={product.description}
            status={product.status}
          />
        ))}

      </div>

    </section>
  );
}

export default Products;