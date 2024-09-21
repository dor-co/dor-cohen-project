export interface IMyStoreState {
  productsList: IProductItem[];
  selectedProduct: number | null;
}

export interface IProductItem {
  id: number;
  name: string;
  description?: string;
  price: number;
  creationDate: string;
}

export interface IProductProps {
  product: IProductItem;
  isSelected: boolean;
  onClick: () => void;
}

export interface IProductDetailsProps {
  product: IProductItem;
}

export interface IDetailsFormValues {
  name: string;
  description?: string;
  price: number;
  creationDate?: string;
}
