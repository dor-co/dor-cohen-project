import { IProductProps } from "../../common/types";
import "./style.scss";

const Product: React.FC<IProductProps> = ({ product, onClick, isSelected }) => {
  return (
    <div
      className={`product-container ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>price: {product.price}</p>
      <p>creation date: {product.creationDate?.toString()}</p>
      <button>DELETE</button>
    </div>
  );
};

export default Product;
