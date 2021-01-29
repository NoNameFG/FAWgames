import React from 'react';
import { connect } from 'react-redux';
import { themeStyleChange } from './../../../Actions/Theme/ThemeChange.js';

class ThemeToogle extends React.Component{
  handleChange = () => {
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

  render(){
    return(
      <div className="theme_wrapper">
        <input
          type="checkbox"
          id="thm_switch--secondary"
          className="theme_toggle--checkbox"
          onChange={this.handleChange}
          checked={this.props.themeStyle === 'dark_theme'}
        />
        <label className="theme_toggle" htmlFor="thm_switch--secondary">
          <div className="theme_toggle--dark">Dark</div>
          <div className="theme_toggle--light">Light</div>
          <div className="theme_toggle--roll"></div>
        </label>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    themeStyle: state.themeStyle
  }
}

export default connect(mapStateToProps, {themeStyleChange})(ThemeToogle);
