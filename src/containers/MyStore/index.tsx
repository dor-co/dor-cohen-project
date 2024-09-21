import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import { staticData } from "../../common/constants";
import Product from "../../components/product";
import ProductDetails from "../../components/productDetails";
import { setProductsList, setSelectedProduct } from "./myStoreSlice";
import { Button, Input, Select } from "antd";

const MyStore: React.FC = () => {
  const dispatch = useDispatch();
  const { productsList, selectedProduct } = useSelector(
    (state: RootState) => state.myStore
  );

  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<string>("Sort Products By...");

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

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
  };

  const onSort = (value: string) => {
    setSort(value);
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
          <div className="filter-header">
            <Button className="filter-btn">ADD</Button>
            <Input
              value={search}
              onChange={onSearch}
              className="filter-input"
              placeholder="Search Produts"
            />
            <Select
              defaultValue="Sort Products"
              className="filter-select"
              style={{ width: 120 }}
              value={sort}
              onChange={onSort}
              options={[
                { value: "Sort Products By...", label: "Sort Products By..." },
                { value: "Name", label: "Name" },
                { value: "Creation Date", label: "Creation Date" },
              ]}
            />
          </div>

          {productsList
            .filter(
              (p) =>
                p.name.toLowerCase().includes(search.toLowerCase()) ||
                p.description?.toLowerCase()?.includes(search.toLowerCase())
            )
            .sort((a, b) => {
              if (sort === "Name") {
                return a.name.localeCompare(b.name);
              } else if (sort === "Creation Date") {
                return (
                  new Date(a.creationDate).getTime() -
                  new Date(b.creationDate).getTime()
                );
              }
              return 0;
            })
            .map((product, key) => {
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
