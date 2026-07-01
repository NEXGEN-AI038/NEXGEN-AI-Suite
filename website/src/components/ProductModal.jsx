import "./ProductModal.css";

function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="modal-overlay">

      <div className="modal">

        <button className="close-button" onClick={onClose}>
          ✕
        </button>

        <div className="modal-icon">
          {product.icon}
        </div>

        <h2>{product.title}</h2>

        <p>{product.description}</p>

        <div className="modal-status">
          Status: {product.status}
        </div>

        <button className="modal-close" onClick={onClose}>
          Close
        </button>

      </div>

    </div>
  );
}

export default ProductModal;