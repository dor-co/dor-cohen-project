export interface IMyStoreState {
  title: string;
}

export interface IProductItem {
  id: number;
  name: string;
  description?: string;
  price: number;
  creationDate: Date;
}

// export interface IProductsList {
//   productsList: IProductItem[];
// }

export interface IProductProps {
  product: IProductItem;
  isSelected: boolean;
  onClick: () => void;
}

export interface IProductDetailsProps {
  id: number;
}
