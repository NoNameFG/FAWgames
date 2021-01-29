import React from "react";
import './Preloader.css';

class Preloader extends React.Component {
  render(){
    return (
      <svg width="75" height="75" viewBox="0 0 100 100" className="preloader_svg">
        <polyline className="line-cornered stroke-still" points="0,0 100,0 100,100" strokeWidth="10" fill="none"></polyline>
        <polyline className="line-cornered stroke-still" points="0,0 0,100 100,100" strokeWidth="10" fill="none"></polyline>
        <polyline className="line-cornered stroke-animation" points="0,0 100,0 100,100" strokeWidth="10" fill="none"></polyline>
        <polyline className="line-cornered stroke-animation" points="0,0 0,100 100,100" strokeWidth="10" fill="none"></polyline>
      </svg>
    );
  }
}

export default Preloader;
