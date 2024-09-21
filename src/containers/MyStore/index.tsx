import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import { staticData } from "../../common/constants";
import Product from "../../components/product";
import ProductDetails from "../../components/productDetails";
import { setProductsList, setSelectedProduct } from "./myStoreSlice";

const MyStore: React.FC = () => {
  const dispatch = useDispatch();
  const { productsList, selectedProduct } = useSelector(
    (state: RootState) => state.myStore
  );

  const getData = (): void => {
    try {
      let productsList = localStorage.getItem("productsList");

      if (!productsList) {
        localStorage.setItem("productsList", JSON.stringify(staticData));
        productsList = JSON.stringify(staticData);
      }

      dispatch(setProductsList(JSON.parse(productsList)));
    } catch (err) {
      console.error("error getting data from local storage:", err);
    }
  };

  const onSelectProduct = (id: number) => {
    if (selectedProduct === id) {
      dispatch(setSelectedProduct(null));
    } else {
      dispatch(setSelectedProduct(id));
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
        {selectedProduct && (
          <ProductDetails
            key={selectedProduct}
            product={productsList.filter((p) => p.id === selectedProduct)[0]}
          />
        )}
      </div>
    </>
  );
};

export default MyStore;
