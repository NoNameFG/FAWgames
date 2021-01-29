import React from 'react';
import { Link } from 'react-router-dom';
import { genresConverter } from './../../../../Functions/GenresConverter.js';

const CategoryTemplate = props => {
  return(
    <div className="category_template">
      <Link to={`/search?genres=${props.genre}&page=1`} className="category_template--wrapp">
        <div className="category_template--holder">
          <img src={require(`./svg/${props.genre}.svg`)} alt="category-genre" className="category_template--holder_image"/>
        </div>
        <div className="category_template--title">
          {genresConverter(props.genre)}
        </div>
      </Link>
    </div>
  );
}

export default CategoryTemplate;
