import "./ProductCard.css";

function ProductCard({ icon, title, description }) {
  return (
    <div className="product-card">
      <div className="product-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <button>Learn More →</button>
    </div>
  );
}

export default ProductCard;