import "./Products.css";
import ProductCard from "./ProductCard";

function Products() {
  return (
    <section className="products">

      <h2>Featured AI Products</h2>

      <div className="product-grid">

        <ProductCard
          icon="🩺"
          title="MediExplain AI"
          description="Understand medical reports in plain English."
        />

        <ProductCard
          icon="✈️"
          title="Travel Planner AI"
          description="Plan intelligent trips with AI."
        />

        <ProductCard
          icon="🛡️"
          title="CyberShield AI"
          description="Your cybersecurity companion."
        />

        <ProductCard
          icon="💼"
          title="Career Mentor AI"
          description="AI-powered career guidance."
        />

      </div>

    </section>
  );
}

export default Products;