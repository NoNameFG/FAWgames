import React from 'react';
import { withRouter } from 'react-router-dom';

class ShowAnother extends React.PureComponent{
  handleClick = () => {
    this.props.history.push(`/search?tag=${this.props.tag}&page=1`);
    this.props.seacrhFieldStateChange();
  }

  render(){
    return(
      <div onClick={this.handleClick} className="search_result--item search_result--another">
        <div className="search_result--item_wrapper">
          Показать ещё...
        </div>
      </div>
    );
  }
}

export default withRouter(ShowAnother);
