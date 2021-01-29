import React from 'react';
import { connect } from 'react-redux';
import { themeStyleChange } from './../../../Actions/Theme/ThemeChange.js';
import { currentCurrencyChange } from './../../../Actions/Currency/Currency.js';
import { withRouter } from 'react-router-dom'

class Navigation extends React.Component{
  constructor(props){
    super(props);
    this.searchField = React.createRef();
  }

  state = {
    navigationStatus: false,
    settingsStatus: false,
    inputVal: ''
  }

  handleNavigationChange = () => {
    this.setState({
      navigationStatus: !this.state.navigationStatus
    })
  }

  handleSettingsChange = () => {
    this.setState({
      settingsStatus: !this.state.settingsStatus
    })
  }

  handleThemeChange = () => {
    if(this.props.themeStyle === 'white_theme'){
      localStorage.FAWgames_Theme = 'dark_theme';
      this.props.themeStyleChange('dark_theme');
      document.body.style.background = '#171C20';
      document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#171C20');
    } else {
      localStorage.FAWgames_Theme = 'white_theme';
      this.props.themeStyleChange('white_theme');
      document.body.style.background = '#F4F4F4';
      document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#F4F4F4');
    }
  }

  handleCurrencyChange = data => {
    localStorage.FAWgames_Currency = data;
    this.props.currentCurrencyChange(data);
  }

  handleFeedbackDirect = data => {
    this.handleNavigationChange();
    this.props.history.push(data);
  }

  handleSearchChange = e => {
    this.setState({
      inputVal: e.target.value
    })
  }

  handleSubmitSearch = e => {
    e.preventDefault();
    this.props.history.push(`/search?${this.state.inputVal ? `tag=${this.state.inputVal}&` : ''}page=1`);
    this.setState({
      inputVal: '',
      navigationStatus: false
    });
    this.searchField.current.value = '';
  }

  render(){
    return(
      <div className={`navigation_wrapper${this.state.navigationStatus ? ' active' : ''}`}>{/*Another active for settings inside*/}
        <button className="navigation_button" onClick={this.handleNavigationChange}>
          <span className="navigation_button--first_line"></span>
          <span className="navigation_button--second_line"></span>
          <span className="navigation_button--third_line"></span>
        </button>
        {this.state.navigationStatus && <div onClick={this.handleNavigationChange} className="hide_content"></div>}
        <nav className="navigation_dropdown">
          <div className="search_secondary">
            <form className="search_field search_field--secondary" onSubmit={this.handleSubmitSearch}>
              <div onClick={this.handleSubmitSearch} className="search_field--logo"><svg version="1.1" style={{width: "17px", height: "17px"}} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
     viewBox="0 0 451 451">
    <path d="M447.05,428l-109.6-109.6c29.4-33.8,47.2-77.9,47.2-126.1C384.65,86.2,298.35,0,192.35,0C86.25,0,0.05,86.3,0.05,192.3
      s86.3,192.3,192.3,192.3c48.2,0,92.3-17.8,126.1-47.2L428.05,447c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4
      C452.25,441.8,452.25,433.2,447.05,428z M26.95,192.3c0-91.2,74.2-165.3,165.3-165.3c91.2,0,165.3,74.2,165.3,165.3
      s-74.1,165.4-165.3,165.4C101.15,357.7,26.95,283.5,26.95,192.3z"/>
  </svg></div>
              <input className="search_string" name="search_string--secondary" autoComplete="off"  type="text" onChange={this.handleSearchChange} ref={this.searchField}/>
            </form>
          </div>
          <div onClick={()=>this.handleFeedbackDirect('/')} className="navigation_dropdown--item">Главная</div>
          <div onClick={()=>this.handleFeedbackDirect('/category')} className="navigation_dropdown--item">Категории</div>
          <div onClick={()=>this.handleFeedbackDirect('/activation/steam')} className="navigation_dropdown--item">Активация</div>
          <div className={`navigation_dropdown--settings${this.state.settingsStatus ? ' active' : ''}`}>
            <div className="navigation_dropdown--settings_main" onClick={this.handleSettingsChange}>
              <span>Настройки</span>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,14.071L8.179,10.25c-0.414-0.414-1.086-0.414-1.5,0l0,0c-0.414,0.414-0.414,1.086,0,1.5l4.614,4.614 c0.391,0.391,1.024,0.391,1.414,0l4.614-4.614c0.414-0.414,0.414-1.086,0-1.5v0c-0.414-0.414-1.086-0.414-1.5,0L12,14.071z"></path></svg>
              </div>
            </div>
            <div className="theme_toggle--secondary">
              <span>Тема</span>
              <input
                type="checkbox"
                id="thm_switch"
                className="theme_toggle--checkbox"
                onChange={this.handleThemeChange}
                checked={this.props.themeStyle === 'dark_theme'}
              />
              <label className="theme_toggle" htmlFor="thm_switch">
                <div className="theme_toggle--dark">Dark</div>
                <div className="theme_toggle--light">Light</div>
                <div className="theme_toggle--roll"></div>
              </label>
            </div>
            <div className="currency_switch--seccondary">
              <span>Валюта</span>
              <div className="currency_switch--wrapper">
                <div
                  className={`currency_switch--wrapper_item${this.props.currentCurrency === 'RUB' ? ' active' : ''}`}
                  onClick={() => this.handleCurrencyChange('RUB')}
                >
                  RUB
                </div>
                <div
                  className={`currency_switch--wrapper_item${this.props.currentCurrency === 'UAH' ? ' active' : ''}`}
                  onClick={() => this.handleCurrencyChange('UAH')}
                >
                  UAH
                </div>
                <div
                  className={`currency_switch--wrapper_item${this.props.currentCurrency === 'USD' ? ' active' : ''}`}
                  onClick={() => this.handleCurrencyChange('USD')}
                >
                  USD
                </div>
                <div
                  className={`currency_switch--wrapper_item${this.props.currentCurrency === 'EUR' ? ' active' : ''}`}
                  onClick={() => this.handleCurrencyChange('EUR')}
                >
                  EUR
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    themeStyle: state.themeStyle,
    currentCurrency: state.currentCurrency
  }
}

export default withRouter(connect(mapStateToProps, {themeStyleChange, currentCurrencyChange})(Navigation));
