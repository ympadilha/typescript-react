import React, { Component } from 'react';
import './App.css';
import { Product } from '../Product';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">Welcome to the store!</header>
        <main className="main container">
          <h1>Products</h1>
          <ol>
            <Product name="White t-shirt" price={30.2} />
            <Product name="Red socks" price={10.7} />
            <Product name="Brown trousers" price={55.1} />
          </ol>
        </main>
      </div>
    );
  }
}
