import * as React from 'react';

interface ProductProps {
  name: string;
  price: number;
}

export const Product: React.FC<ProductProps> = ({ name, price }) => {
  return (
    <div className="product">
      <h3 className="product-name">{name}</h3>
      <span className="product-price">{price}</span>
    </div>
  );
};
