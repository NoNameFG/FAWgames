import React from 'react';
import Logo from './Logo/Logo.jsx';
import Navigation from './Navigation/Navigation.jsx';
import ThemeToogle from './ThemeToogle/ThemeToogle.jsx';
import Currency from './Currency/Currency.jsx';
import SeacrhField from './SearchField/SearchField.jsx';
import './Header.css';

class Header extends React.Component{
  render(){
    return(
      <header className="header_main">
        <div className="header_wrapper">
          <Logo/>
          <Navigation/>
          <SeacrhField/>
          <Currency/>
          <ThemeToogle/>
        </div>
      </header>
    );
  }
}

export default Header;
