import "./ProductCard.css";

function ProductCard({
  icon,
  title,
  description,
  status,
  onLearnMore,
}) {
  return (
    <div className="product-card">

      <div className="product-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <p className="status">
        {status}
      </p>

      <button onClick={onLearnMore}>
        Learn More →
      </button>

    </div>
  );
}

export default ProductCard;