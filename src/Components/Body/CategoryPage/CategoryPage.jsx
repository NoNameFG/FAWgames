import React from 'react';
import './CategoryPage.css';
import CategoryTemplate from './CategoryTemplate/CategoryTemplate.jsx';

class CategoryPage extends React.Component{
  componentDidMount(){
    document.title = 'Категории';
  }

  render(){
    const genresArr = [
      'arcade',
      'strategy',
      'shooter',
      'RPG',
      'racing',
      'casual',
      'horror',
      'survival',
      'action',
      'fighting',
      'adventure',
      'roguelike',
      'steampunk',
      'sport',
      'simulator',
      'coop',
      'battleroyale',
      'post-apocalyptic',
    ];

    const templateList = genresArr.map( (el, index) => <CategoryTemplate key={'category_template-' + index} genre={el}/>)

    return(
      <div className="category">
        {templateList}
      </div>
    );
  }
}

export default CategoryPage;
