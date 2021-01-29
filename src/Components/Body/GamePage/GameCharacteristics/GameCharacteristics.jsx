import React from 'react';
import { Link } from 'react-router-dom';
import { dateConverter } from './../../../../Functions/DateConverter.js';
import { genresConverter } from './../../../../Functions/GenresConverter.js';

class GameCharacteristics extends React.Component{
  render(){
    let genresList = []
    if(this.props.characteristics.genres) genresList = this.props.characteristics.genres.map((el, index) => <Link key={'genre_' + index} to={`/search?genres=${el}`}>{genresConverter(el)}</Link>)
    return(
      <div className="game_wrapper--characteristics">
        <div className="characteristics_item">
          <div className="characteristics_item--key">Жанры</div>
          <div className="characteristics_item--value">
            {genresList}
          </div>
        </div>
        <div className="characteristics_item">
          <div className="characteristics_item--key">Язык</div>
          <div className="characteristics_item--value">{this.props.characteristics.language}</div>
        </div>
        <div className="characteristics_item">
          <div className="characteristics_item--key">Дата выхода</div>
          <div className="characteristics_item--value">{dateConverter(this.props.characteristics.release_date)}</div>
        </div>
        <div className="characteristics_item">
          <div className="characteristics_item--key">Издатель</div>
          <div className="characteristics_item--value">{this.props.characteristics.publisher}</div>
        </div>
        <div className="characteristics_item">
          <div className="characteristics_item--key">Разработчик</div>
          <div className="characteristics_item--value">{this.props.characteristics.developer}</div>
        </div>
      </div>
    );
  }
}

export default GameCharacteristics;
