import { ErrorMessage, Form, Formik } from "formik";
import { IDetailsFormValues, IProductDetailsProps } from "../../common/types";
import "./style.scss";
import { schema } from "../../common/constants";
import {
  setProductsList,
  setSelectedProduct,
} from "../../containers/MyStore/myStoreSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Button, DatePicker, Input } from "antd";

const ProductDetails: React.FC<IProductDetailsProps> = ({ product }) => {
  const { productsList } = useSelector((state: RootState) => state.myStore);
  const dispatch = useDispatch();

  const onUpdateProduct = (values: any) => {
    let productsListTemp = JSON.parse(JSON.stringify(productsList));
    productsListTemp = productsList.map((prod: any) =>
      prod.id === product.id ? { ...prod, ...values } : prod
    );

    localStorage.setItem("productsList", JSON.stringify(productsListTemp));
    dispatch(setProductsList(productsListTemp));
    dispatch(setSelectedProduct(null));
  };

  const onCancel = (): void => {
    dispatch(setSelectedProduct(null));
  };

  const initialValues: IDetailsFormValues = {
    name: product.name,
    description: product.description,
    price: product.price,
    creationDate: product.creationDate,
  };

  return (
    <div className="product-details-container">
      <h2>Edit:</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values: IDetailsFormValues) => {
          console.log(values);
          onUpdateProduct(values);
        }}
        validate={(values: IDetailsFormValues) => {
          console.log(values);
        }}
      >
        {({ values, handleChange, setFieldValue }) => (
          <Form>
            <div className="field-container">
              <label htmlFor="name">Name:</label>
              <Input
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
              <ErrorMessage
                className="error-message"
                name="name"
                component="div"
              />
            </div>

            <div className="field-container">
              <label htmlFor="description">Description:</label>
              <Input
                type="text"
                id="description"
                name="description"
                value={values.description}
                onChange={handleChange}
              />
              <ErrorMessage
                className="error-message"
                name="description"
                component="div"
              />
            </div>

            <div className="field-container">
              <label htmlFor="price">Price:</label>
              <Input
                type="number"
                id="price"
                name="price"
                value={values.price}
                onChange={handleChange}
              />
              <ErrorMessage
                className="error-message"
                name="price"
                component="div"
              />
            </div>

            <div className="field-container">
              <label htmlFor="creationDate">Creation Date:</label>
              <DatePicker
                format={"YYYY/MM/DD"}
                id="creationDate"
                name="creationDate"
                onChange={(date, dateString) => {
                  setFieldValue("creationDate", dateString);
                }}
              />
              <ErrorMessage
                className="error-message"
                name="creationDate"
                component="div"
              />
            </div>

            <Button className="submit-btn" type="primary" htmlType="submit">
              SAVE
            </Button>
            <Button onClick={onCancel} className="cancel-btn">
              CANCEL
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProductDetails;
