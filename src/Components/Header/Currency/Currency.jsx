import React from 'react';
import { currentCurrencyChange } from './../../../Actions/Currency/Currency.js';
import { connect } from 'react-redux';

class Currency extends React.Component{
  state = {
    currencyFlag: false
  }

  handleCurrencyOpen = () => {
    this.setState({
      currencyFlag: !this.state.currencyFlag
    })
  }

  handleCurrencyChange = data => {
    localStorage.FAWgames_Currency = data;
    this.props.currentCurrencyChange(data);
    this.setState({
      currencyFlag: false
    })
  }

  render(){
    return(
      <div className={`currency_wrapper${this.state.currencyFlag ? ' active' : ''}`}>
        <div className="currency_switcher" onClick={this.handleCurrencyOpen}>
          <div className="currency_switcher--current">
            <span>{this.props.currentCurrency ? this.props.currentCurrency : ''}</span>
          </div>
          <div className="currency_switcher--arrow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,14.071L8.179,10.25c-0.414-0.414-1.086-0.414-1.5,0l0,0c-0.414,0.414-0.414,1.086,0,1.5l4.614,4.614 c0.391,0.391,1.024,0.391,1.414,0l4.614-4.614c0.414-0.414,0.414-1.086,0-1.5v0c-0.414-0.414-1.086-0.414-1.5,0L12,14.071z"></path></svg>
          </div>
        </div>
        {this.state.currencyFlag && <div onClick={this.handleCurrencyOpen} className="hide_content"></div>}
        <div className="currency_list">
          <div className="currency_list--item" onClick={() => this.handleCurrencyChange('RUB')}><span>RUB</span></div>
          <div className="currency_list--item" onClick={() => this.handleCurrencyChange('UAH')}><span>UAH</span></div>
          <div className="currency_list--item" onClick={() => this.handleCurrencyChange('USD')}><span>USD</span></div>
          <div className="currency_list--item" onClick={() => this.handleCurrencyChange('EUR')}><span>EUR</span></div>
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

export default connect(mapStateToProps, {currentCurrencyChange})(Currency);
