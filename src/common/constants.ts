import { IProductItem } from "./types";
import * as Yup from "yup";

export const staticData: IProductItem[] = [
  {
    id: 1,
    name: "Product 1",
    description: "Description 1",
    price: 10,
    creationDate: new Date(),
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description 2",
    price: 20,
    creationDate: new Date(),
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description 3",
    price: 30,
    creationDate: new Date(),
  },
  {
    id: 4,
    name: "Product 4",
    description: "Description 4",
    price: 40,
    creationDate: new Date(),
  },
  {
    id: 5,
    name: "Product 5",
    description: "Description 5",
    price: 50,
    creationDate: new Date(),
  },
];

export const schema = Yup.object().shape({
  name: Yup.string().max(30, "Name is too long!").required("Name is required"),
  description: Yup.string().max(200, "Description is too long!"),
  price: Yup.number()
    .positive("Price must be a positive number!")
    .required("Price is required"),
  creationDate: Yup.date().required("Creation Date is required").nullable(),
});
