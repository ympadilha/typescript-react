import React, { Component } from 'react';
import './App.css';
import { Product, ProductProps } from '../Product';

interface AppProps {}

interface AppState {
  products: ProductProps[];
}

export class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      products: [
        { name: 'White t-shirt', price: 30.2 },
        { name: 'Red socks', price: 10.7 },
        { name: 'Brown trousers', price: 55.1 },
        { name: 'Black jacket', price: 155.9 },
      ],
    };
  }

  private addProduct = (event: React.MouseEvent) => {
    event.preventDefault();
    this.setState(prevState => ({
      products: [...prevState.products, { name: 'bunny', price: 12.2 }],
    }));
  };

  render() {
    return (
      <div className="app">
        <header className="app-header container">Welcome to the store!</header>
        <main className="main container">
          <h1 className="product-title">Products</h1>
          <ol className="product-list">
            {this.state.products.map(({ name, price }) => (
              <Product name={name} price={price} />
            ))}
          </ol>
        </main>

        <footer className="container footer">
          <button className="button" onClick={this.addProduct}>
            Add product
          </button>
        </footer>
      </div>
    );
  }
}
