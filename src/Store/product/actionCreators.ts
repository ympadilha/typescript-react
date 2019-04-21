import { ProductProps } from '../../Product';
import { ProductActionType } from './ProductActionType';

export interface AddProductAction {
  type: string;
  payload: ProductProps;
}

export const addProduct = (productProps: ProductProps): AddProductAction => ({
  type: ProductActionType.Add,
  payload: {
    name: productProps.name,
    price: productProps.price,
  },
});
