import React from 'react';
import { distConverter } from './../../../../Functions/DistConverter.js';
import { currencyConverter } from './../../../../Functions/CurrencyConverter.js';

class GameProduct extends React.Component{
  handleRedirectURL = url => {
    window.location = `https://www.digiseller.market/asp/pay_wm.asp?id_d=${url}&ai=880508`;
  }

  render(){
    return(
      <li className="game_product--list_item">
        <div onClick={() => this.handleRedirectURL(this.props.product_id)}>
          <div className="game_product--list_item--name">{this.props.product_name}</div>
          <div className="game_product--list_item--price">
            {this.props.currentCurrency === 'RUB' && this.props.price_rub}
            {this.props.currentCurrency === 'UAH' && this.props.price_uah}
            {this.props.currentCurrency === 'USD' && this.props.price_usd}
            {this.props.currentCurrency === 'EUR' && this.props.price_eur}
            <span>{currencyConverter(this.props.currentCurrency)}</span>
            {distConverter(this.props.distributor)}
          </div>
        </div>
      </li>
    );
  }
}

export default GameProduct;
