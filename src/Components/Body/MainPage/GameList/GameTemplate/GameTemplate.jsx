import React from 'react';
import { connect } from 'react-redux';
import { currencyConverter } from './../../../../../Functions/CurrencyConverter.js';
import { distConverter } from './../../../../../Functions/DistConverter.js';
import { Link } from 'react-router-dom';

class GameTemplate extends React.Component{
  render(){
    const distList = this.props.data.distributor.map(el => distConverter(el));

    return(
      <Link className="game_template" to={'/game/' + this.props.data.game_url}>
        <div className="game_template--holder">
          <img className="game_template--image" alt="game_name" src={this.props.data.image3}/>
          <div className="game_template--dist">
            {distList}
          </div>
        </div>
        <div className="game_template--price">
          {this.props.currentCurrency === 'RUB' && this.props.data.prices.price_rub}
          {this.props.currentCurrency === 'UAH' && this.props.data.prices.price_uah}
          {this.props.currentCurrency === 'USD' && this.props.data.prices.price_usd}
          {this.props.currentCurrency === 'EUR' && this.props.data.prices.price_eur}
          <span className="price_currency">{currencyConverter(this.props.currentCurrency)}</span>
        </div>
      </Link>
    );
  }
}

function mapStateToProps(state){
  return{
    currentCurrency: state.currentCurrency
  }
}

export default connect(mapStateToProps)(GameTemplate);
