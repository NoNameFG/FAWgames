import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
//Components
import Header from './Components/Header/Header.jsx';
import Slider from './Components/Body/MainPage/Slider/Slider.jsx';
import GameList from './Components/Body/MainPage/GameList/GameList.jsx';
import Footer from './Components/Body/MainPage/Footer/Footer.jsx';
import GamePage from './Components/Body/GamePage/GamePage.jsx';
import ActivationPage from './Components/Body/ActivationPage/ActiovationPage.jsx';
import SearchPage from './Components/Body/SearchPage/SearchPage.jsx';
import CategoryPage from './Components/Body/CategoryPage/CategoryPage.jsx';
//actions
import { themeStyleChange } from './Actions/Theme/ThemeChange.js';
import { currentCurrencyChange } from './Actions/Currency/Currency.js';

class App extends React.Component{
  componentDidMount(){
    if(localStorage.FAWgames_Theme === 'dark_theme'){
      this.props.themeStyleChange(localStorage.FAWgames_Theme);
      document.body.style.background = '#171C20';
      document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#171C20');
    } else if(localStorage.FAWgames_Theme === 'white_theme'){
      document.body.style.background = '#F4F4F4';
      document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#F4F4F4');
    } else {
      this.props.themeStyleChange('white_theme');
      document.body.style.background = '#F4F4F4';
      document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#F4F4F4');
    }

    if(localStorage.FAWgames_Currency){
      this.props.currentCurrencyChange(localStorage.FAWgames_Currency);
    } else {
      this.props.currentCurrencyChange('RUB');
    }
  }

  render(){
    return(
      <div className={this.props.themeStyle}>
        <Header/>
        <main>
          <Switch>
            <Route exact path="/">
              <Slider/>
              <GameList/>
            </Route>
            <Route path="/game">
              <GamePage/>
            </Route>
            <Route path="/activation">
              <ActivationPage/>
            </Route>
            <Route path="/search">
              <SearchPage/>
            </Route>
            <Route path="/category">
              <CategoryPage/>
            </Route>
          </Switch>

          <Footer/>
        </main>
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

export default withRouter(connect(mapStateToProps, { themeStyleChange, currentCurrencyChange })(App));
