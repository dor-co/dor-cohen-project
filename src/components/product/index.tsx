import { useDispatch, useSelector } from "react-redux";
import { IProductItem, IProductProps } from "../../common/types";
import "./style.scss";
import { RootState } from "../../redux/store";
import { setProductsList } from "../../containers/MyStore/myStoreSlice";

const Product: React.FC<IProductProps> = ({ product, onClick, isSelected }) => {
  const { productsList } = useSelector((state: RootState) => state.myStore);
  const dispatch = useDispatch();

  const onDeleteProduct = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();

    let productsListTemp = JSON.parse(JSON.stringify(productsList));
    productsListTemp = productsListTemp.filter(
      (p: IProductItem) => p.id !== id
    );

    localStorage.setItem("productsList", JSON.stringify(productsListTemp));
    dispatch(setProductsList(productsListTemp));
  };

  return (
    <div
      className={`product-container ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>price: {product.price}</p>
      <p>creation date: {product.creationDate?.toString()}</p>
      <button onClick={(e) => onDeleteProduct(e, product.id)}>DELETE</button>
    </div>
  );
};

export default Product;
