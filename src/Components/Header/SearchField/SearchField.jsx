import React from 'react';
import api from './../../../Api/api.js';
import SearchItem from './SearchItem/SearchItem.jsx';
import ShowAnother from './SearchItem/ShowAnother.jsx';
import { withRouter } from 'react-router-dom';

class SeacrhField extends React.Component{
  constructor(props){
    super(props);
    this.searchField = React.createRef();
  }

  state = {
    searchGamesList: [],
    inputVal: ''
  }

  handleFindGames = async e => {
    this.setState({
      inputVal: e.target.value
    })
    if(e.target.value){
      try {
        let data = await api.search_field({name: e.target.value});
        this.setState({
          searchGamesList: data.data
        })
      } catch (error){
        console.log(error);
      }
    }
  }

  handleState = () => {
    if(this.props.contentHide && this.state.inputVal){
      this.props.contentHideChange(false);
    }
    this.setState({
      searchGamesList: [],
      inputVal: ''
    });
    this.searchField.current.value = '';
  }

  handleSubmitSearch = e => {
    e.preventDefault();
    this.props.history.push(`/search?${this.state.inputVal ? `tag=${this.state.inputVal}&` : ''}page=1`);
    this.handleState();
  }

  render(){
    const searchItemsList = this.state.searchGamesList.map( (el, index) =>
      <SearchItem
        {...el}
        seacrhFieldStateChange={this.handleState}
        key={'search_field_game_' + index}
      />
    )
    return(
      <div className={`search_wrapper${this.state.searchGamesList ? ' active' : ''}`}>
        <form onSubmit={this.handleSubmitSearch} className="search_field">
          <div className="search_field--string">
            <input className="search_string" autoComplete="off" name="search_string" type="text" onChange={this.handleFindGames} ref={this.searchField}/>
          </div>
          <div className="search_field--logo" onClick={this.handleSubmitSearch}><svg version="1.1" style={{width: "17px", height: "17px"}} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
   viewBox="0 0 451 451">
  <path d="M447.05,428l-109.6-109.6c29.4-33.8,47.2-77.9,47.2-126.1C384.65,86.2,298.35,0,192.35,0C86.25,0,0.05,86.3,0.05,192.3
    s86.3,192.3,192.3,192.3c48.2,0,92.3-17.8,126.1-47.2L428.05,447c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4
    C452.25,441.8,452.25,433.2,447.05,428z M26.95,192.3c0-91.2,74.2-165.3,165.3-165.3c91.2,0,165.3,74.2,165.3,165.3
    s-74.1,165.4-165.3,165.4C101.15,357.7,26.95,283.5,26.95,192.3z"/>
</svg></div>
        </form>
        {this.state.inputVal && <div onClick={this.handleState} className="hide_content"></div>}
        <div className="search_result">
          {this.state.inputVal && searchItemsList}
          {(this.state.searchGamesList.length > 5 && this.state.inputVal) && <ShowAnother seacrhFieldStateChange={this.handleState} tag={this.state.inputVal}/>}
        </div>
      </div>
    );
  }
}

export default withRouter(SeacrhField);
