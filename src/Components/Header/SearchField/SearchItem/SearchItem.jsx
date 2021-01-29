import React from 'react';
import { currencyConverter } from './../../../../Functions/CurrencyConverter.js';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class SearchItem extends React.Component{
  handleClick = () => {
    this.props.history.push('/game/' + this.props.game_url);
    this.props.seacrhFieldStateChange();
  }

  render(){
    return(
      <div onClick={this.handleClick} className="search_result--item">
        <div className="search_result--item_wrapper">
          <span className="item_name">{this.props.name}</span>
          <span className="search_price">
            {this.props.currentCurrency === 'RUB' && this.props.prices.price_rub}
            {this.props.currentCurrency === 'UAH' && this.props.prices.price_uah}
            {this.props.currentCurrency === 'USD' && this.props.prices.price_usd}
            {this.props.currentCurrency === 'EUR' && this.props.prices.price_eur}
            <span className="search_price--currency">{currencyConverter(this.props.currentCurrency)}</span>
          </span>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    currentCurrency: state.currentCurrency
  }
}

export default withRouter(connect(mapStateToProps)(SearchItem));
