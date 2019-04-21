import React, { Component } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { addProduct } from '../Store';
import { Product, ProductProps } from '../Product';
import './App.css';

type AppProps = AppStateProps & AppDispatchProps;

interface AppDispatchProps {
  addProduct: typeof addProduct;
}

export interface AppStateProps {
  products: ProductProps[];
}

class App extends Component<AppProps> {
  constructor(props: AppProps) {
    super(props);
  }

  private addProduct =  (event: React.MouseEvent) => {
    event.preventDefault();
    this.props.addProduct({ name: 'Motorcycle', price: 12000.5 });
  };

  public render = () => {
    return (
      <div className="app">
        <header className="app-header container">Welcome to the store!</header>
        <main className="main container">
          <h1 className="product-title">Products</h1>
          <ol className="product-list">
            {this.props.products.map(({ name, price }) => <Product name={name} price={price} />)}
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

const mapStateToProps = (state: any): AppStateProps => {
  return { products: state.products };
};

const mapDispatchToProps = (dispatch: Dispatch): AppDispatchProps => ({
  ...bindActionCreators(
    {
      addProduct,
    },
    dispatch
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
