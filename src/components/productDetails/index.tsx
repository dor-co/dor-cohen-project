import { ErrorMessage, Field, Form, Formik } from "formik";
import { IDetailsFormValues, IProductDetailsProps } from "../../common/types";
import "./style.scss";
import { schema } from "../../common/constants";
import { setProductsList } from "../../containers/MyStore/myStoreSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";

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
  };

  const initialValues: IDetailsFormValues = {
    name: product.name,
    description: product.description,
    price: product.price,
    creationDate: product.creationDate,
  };

  return (
    <div className="product-details-container">
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values: IDetailsFormValues) => {
          onUpdateProduct(values);
        }}
        validate={(values) => {
          //console.log(values);
        }}
      >
        {({ setFieldValue }) => (
          <Form>
            <div>
              <label htmlFor="name">Name:</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage
                className="error-message"
                name="name"
                component="div"
              />
            </div>

            <div>
              <label htmlFor="description">Description:</label>
              <Field type="text" id="description" name="description" />
              <ErrorMessage
                className="error-message"
                name="description"
                component="div"
              />
            </div>

            <div>
              <label htmlFor="price">Price:</label>
              <Field type="number" id="price" name="price" />
              <ErrorMessage
                className="error-message"
                name="price"
                component="div"
              />
            </div>

            <div>
              <label htmlFor="creationDate">Creation Date:</label>
              <Field
                type="date"
                id="creationDate"
                name="creationDate"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setFieldValue("creationDate", event.currentTarget.value)
                }
              />
              <ErrorMessage
                className="error-message"
                name="creationDate"
                component="div"
              />
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProductDetails;
