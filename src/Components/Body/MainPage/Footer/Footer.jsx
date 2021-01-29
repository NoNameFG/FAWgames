import React from 'react';
import './Footer.css';

class Footer extends React.PureComponent{
  render(){
    return(
      <footer className="footer_wrapper">
        <span>© 2019 – {new Date().getFullYear()} FAWgames</span>
      </footer>
    );
  }
}

export default Footer;
