import { useState } from "react";
import "./Products.css";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

const products = [
  {
    id: 1,
    icon: "🩺",
    title: "MediExplain AI",
    description: "Understand medical reports in plain English.",
    status: "Coming Soon",
  },
  {
    id: 2,
    icon: "✈️",
    title: "Travel Planner AI",
    description: "Plan intelligent trips with AI.",
    status: "Coming Soon",
  },
  {
    id: 3,
    icon: "🛡️",
    title: "CyberShield AI",
    description: "Your cybersecurity companion.",
    status: "Coming Soon",
  },
  {
    id: 4,
    icon: "💼",
    title: "Career Mentor AI",
    description: "AI-powered career guidance.",
    status: "Coming Soon",
  },
];

function Products() {

  const [selectedProduct, setSelectedProduct] = useState(null);

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
            onLearnMore={() => setSelectedProduct(product)}
          />
        ))}

      </div>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

    </section>
  );
}

export default Products;