export interface IMyStoreState {
  productsList: IProductItem[];
  selectedProduct: number | null;
}

export interface IProductItem {
  id: number;
  name: string;
  description?: string;
  price: number;
  creationDate: Date;
}

export interface IProductProps {
  product: IProductItem;
  isSelected: boolean;
  onClick: () => void;
}

export interface IProductDetailsProps {
  product?: IProductItem;
  isAddProduct?: boolean;
  onCloseAddModal?: () => void;
}

export interface IDetailsFormValues {
  name: string;
  description?: string;
  price: number;
  creationDate?: Date;
  id?: number;
}
