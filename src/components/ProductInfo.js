import React, { Component } from 'react';
import './css/ProductInfo.module.css';
import CurrencyConverter from './CurrencyConverter';

class ProductInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
    };
  }

  handleChange = (event) => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleCommentSubmit(this.props.product.id, this.state.comment);
    this.setState({ comment: '' });
  };

  render() {
    const { product } = this.props;
    const exchangeRate = 0.0273;

    return (
      <div className="product-details">
        <img src={product.cover} alt={product.name} />
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <CurrencyConverter amount={product.price} rate={exchangeRate} currency="UAH" />
        </div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="comment">Add a comment:</label>
          <textarea
            id="comment"
            value={this.state.comment}
            onChange={this.handleChange}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ProductInfo;