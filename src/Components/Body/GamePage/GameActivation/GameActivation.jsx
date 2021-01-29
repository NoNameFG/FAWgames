import React from "react";
import { Link } from 'react-router-dom';
import { distNameToUrlConverter } from './../../../../Functions/DistNameToUrlConverter.js';

class GameActivation extends React.Component{
  render(){
    return (
      <div className="game_wrapper--activation">
        <div>
          {!!this.props.region && <p>Данную игру можно активировать на территории {this.props.region}</p>}
          <Link to={`/activation/${distNameToUrlConverter(this.props.distributor)}`}>{this.props.region ? 'Как активировать в других странах?' : `Как активировать игру в ${this.props.distributor}?`}</Link>
        </div>
      </div>
    );
  }
}

export default GameActivation;
