import * as React from 'react';

export interface ProductProps {
  name: string;
  price: number;
}

export const Product: React.FC<ProductProps> = ({ name, price }) => {
  return (
    <li className="product">
      <h3 className="product-name">{name}</h3>
      <span className="product-price">{price}</span>
    </li>
  );
};
