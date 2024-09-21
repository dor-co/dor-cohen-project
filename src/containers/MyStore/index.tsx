import "./style.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import { staticData } from "../../common/constants";
import { IProductItem } from "../../common/types";
import Product from "../../components/product";
import ProductDetails from "../../components/productDetails";

const MyStore: React.FC = () => {
  //const data = useSelector((state: RootState) => state);
  const [productsList, setProductsList] = useState<IProductItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const getData = (): void => {
    try {
      let productsList = localStorage.getItem("productsList");

      if (!productsList) {
        localStorage.setItem("productsList", JSON.stringify(staticData));
        productsList = JSON.stringify(staticData);
      }

      setProductsList(JSON.parse(productsList));
    } catch (err) {
      console.error("Error fetching data from local storage:", err);
    }
  };

  const onSelectProduct = (id: number) => {
    if (selectedProduct === id) {
      setSelectedProduct(null);
    } else {
      setSelectedProduct(id);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="top-header">My Store</div>
      <div className="my-store-container">
        <div
          className={`products-list-container ${
            selectedProduct ? "side-open" : ""
          }`}
        >
          {productsList.map((product, key) => {
            return (
              <Product
                key={key}
                product={product}
                onClick={() => onSelectProduct(product.id)}
                isSelected={selectedProduct === product.id}
              />
            );
          })}
        </div>
        {selectedProduct && <ProductDetails id={selectedProduct} />}
      </div>
    </>
  );
};

export default MyStore;
