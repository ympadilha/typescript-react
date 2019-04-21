import { createStore, Reducer } from 'redux';
import { AddProductAction, ProductActionType } from './product';
import { AppStateProps } from '../App';

const initial: AppStateProps = {
  products: [
    {
      name: 'Initial Prod',
      price: 1.0,
    },
  ],
};

const productReducer: Reducer<AppStateProps, AddProductAction> = (state: AppStateProps = initial, action: AddProductAction) => {
  switch (action.type) {
    case ProductActionType.Add:
      return {
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
};

export const store = createStore(productReducer);
