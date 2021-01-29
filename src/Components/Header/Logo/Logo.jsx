import React from 'react';
import { Link } from 'react-router-dom';

class Logo extends React.PureComponent{
  render(){
    return(
      <Link to="/" className="header_logo">
        <div className="header_logo--edge">F</div>
        <div className="header_logo--mid">A</div>
        <div className="header_logo--edge">W</div>
      </Link>
    );
  }
}

export default Logo;
