import React, { Component } from "react";

const url = "https://course-api.com/react-store-products";
class Products extends Component {
  state = {
    products: null,
  };
  async componentDidMount() {
    const response = await fetch(url);
    const products = await response.json();
    this.setState({ products });
  }

  render() {
    if (this.state.products === null) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          {this.state.products.map((product) => {
            return <img src={product.image} alt="d"/>
          })}
        </div>
      );
    }
  }
}
        //  url = `${MainUrl}?client_id=_L58fCsi0-lwrlFt-UJkbskBT7EWP63zSs2RWdvusn8${page}`;
        //     url = `${Search}?client_id=_L58fCsi0-lwrlFt-UJkbskBT7EWP63zSs2RWdvusn8${urlPage}${urlQuery}`;  


export default Products;
