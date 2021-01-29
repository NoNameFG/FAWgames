import React from 'react';
import './SearchPage.css';
import { withRouter } from 'react-router-dom';
import GameListSearch from './GameListSearch/GameListSearch.jsx';

class SearchPage extends React.Component{
  state = {
    params: {
      tag: '',
      genres: [],
      page: 1
    }
  }

  constructor(props){
    super(props);
    this.searchField = React.createRef();
  }

  componentDidMount(){
    if(!this.props.location.search){
      this.props.history.push('/search?page=1');
    }

    let params = new URLSearchParams(this.props.location.search),
        paramsToState = {},
        tag = params.get('tag'),
        page = params.get('page'),
        genres = params.getAll('genres');
    if(tag){
      paramsToState.tag = tag;
      this.searchField.current.value = tag;
    }
    if(page){
      paramsToState.page = page;
    } else if(!page) {
      params.set('page', 1);
    }
    if(genres.length) paramsToState.genres = genres;
    this.setState({
      params: {
        ...this.state.params,
        ...paramsToState
      }
    })
    if(tag || page || genres.length)
    this.props.history.push('/search?' + params.toString());
  }

  handleTagChange = name => {
    let newTagList = [];
    if(this.state.params.genres.indexOf(name) !== -1){
      newTagList = [...this.state.params.genres].filter(el => el.toLowerCase() !== name.toLowerCase());
    } else {
      newTagList = [...this.state.params.genres, name];
    }
    this.setState({
      params: {
        ...this.state.params,
        genres: newTagList
      }
    });


    let params = new URLSearchParams(this.props.location.search);
    if(+params.get('page') !== 1){
      params.set('page', 1);
      this.props.history.push('/search?' + params.toString());
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    let exactParams = new URLSearchParams(this.props.location.search),
        exObj = {
          ...this.state.params,
          page: '1'
        }

    if(exactParams.get('page')) exObj.page = exactParams.get('page');

    let urlStr = Object.entries(exObj).filter(el => el[1].length).map(([key, val]) => `${key}=${val}`).join('&');
    this.props.history.push(`/search${urlStr.length ? '?' + urlStr : ''}`);
  }

  handleChange = e => {
    this.setState({
      params: {
        ...this.state.params,
        tag: e.target.value
      }
    })
  }

  handleURLChangeParams = data => {
    this.setState({
      params:{
        ...this.state.params,
        ...data
      }
    })
    if(data.tag){
      this.searchField.current.value = data.tag;
    }
  }

  render(){
    return(
      <div className="search_page">
        <div className="search_page--catalog">
          <div className="search_field--wrapper">
            <form onSubmit={this.handleSubmit} className="search_field">
              <div className="search_field--string">
                <input className="search_string" autoComplete="off" name="search_string" type="text" onChange={this.handleChange} ref={this.searchField}/>
              </div>
              <div className="search_field--logo" onClick={this.handleSubmit}>
                <svg version="1.1" style={{width: "17px", height: "17px"}} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 451 451">
                  <path d="M447.05,428l-109.6-109.6c29.4-33.8,47.2-77.9,47.2-126.1C384.65,86.2,298.35,0,192.35,0C86.25,0,0.05,86.3,0.05,192.3
                    s86.3,192.3,192.3,192.3c48.2,0,92.3-17.8,126.1-47.2L428.05,447c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4
                    C452.25,441.8,452.25,433.2,447.05,428z M26.95,192.3c0-91.2,74.2-165.3,165.3-165.3c91.2,0,165.3,74.2,165.3,165.3
                    s-74.1,165.4-165.3,165.4C101.15,357.7,26.95,283.5,26.95,192.3z"/>
                </svg>
              </div>
            </form>
          </div>

          <GameListSearch paramsValueChange={this.handleURLChangeParams}/>

        </div>
        <div className="search_page--parameters">

          <ul className="search_page--tag_list">
            <li>
              <input type="checkbox" checked={this.state.params.genres.includes('arcade')} id="search_checkbox_1" value="arcade" onChange={() => this.handleTagChange('arcade')}/>
              <label htmlFor="search_checkbox_1">Аркады</label>
            </li>
            <li>
              <input type="checkbox" checked={this.state.params.genres.includes('strategy')} id="search_checkbox_2" value="strategy" onChange={() => this.handleTagChange('strategy')}/>
              <label htmlFor="search_checkbox_2">Стратегии</label>
            </li>
            <li>
              <input type="checkbox" checked={this.state.params.genres.includes('shooter')} id="search_checkbox_3" value="shooter" onChange={() => this.handleTagChange('shooter')}/>
              <label htmlFor="search_checkbox_3">Шутеры</label></li>
            <li>
              <input type="checkbox" checked={this.state.params.genres.includes('RPG')} id="search_checkbox_4" value="RPG" onChange={() => this.handleTagChange('RPG')}/>
              <label htmlFor="search_checkbox_4">RPG</label></li>
            <li>
              <input type="checkbox" checked={this.state.params.genres.includes('racing')} id="search_checkbox_5" value="racing" onChange={() => this.handleTagChange('racing')}/>
              <label htmlFor="search_checkbox_5">Гонки</label></li>
            <li>
              <input type="checkbox" checked={this.state.params.genres.includes('casual')} id="search_checkbox_6" value="casual" onChange={() => this.handleTagChange('casual')}/>
              <label htmlFor="search_checkbox_6">Казуальные</label></li>
            <li>
              <input type="checkbox" checked={this.state.params.genres.includes('horror')} id="search_checkbox_7" value="horror" onChange={() => this.handleTagChange('horror')}/>
              <label htmlFor="search_checkbox_7">Хоррор</label></li>
            <li>
              <input type="checkbox" checked={this.state.params.genres.includes('survival')} id="search_checkbox_8" value="survival" onChange={() => this.handleTagChange('survival')}/>
              <label htmlFor="search_checkbox_8">Выживание</label></li>
            <li>
              <input type="checkbox" checked={this.state.params.genres.includes('action')} id="search_checkbox_9" value="action" onChange={() => this.handleTagChange('action')}/>
              <label htmlFor="search_checkbox_9">Экшен</label></li>
            <li>
              <input type="checkbox" checked={this.state.params.genres.includes('fighting')} id="search_checkbox_10" value="fighting" onChange={() => this.handleTagChange('fighting')}/>
              <label htmlFor="search_checkbox_10">Файтинги</label></li>
            <li>
              <input type="checkbox" checked={this.state.params.genres.includes('adventure')} id="search_checkbox_11" value="adventure" onChange={() => this.handleTagChange('adventure')}/>
              <label htmlFor="search_checkbox_11">Приключения</label></li>
            <li>
              <input type="checkbox" checked={this.state.params.genres.includes('roguelike')} id="search_checkbox_12" value="roguelike" onChange={() => this.handleTagChange('roguelike')}/>
              <label htmlFor="search_checkbox_12">Рогалики</label></li>
            <li>
              <input type="checkbox" checked={this.state.params.genres.includes('steampunk')} id="search_checkbox_13" value="steampunk" onChange={() => this.handleTagChange('steampunk')}/>
              <label htmlFor="search_checkbox_13">Стимпанк</label></li>
            <li>
              <input type="checkbox" checked={this.state.params.genres.includes('sport')} id="search_checkbox_14" value="sport" onChange={() => this.handleTagChange('sport')}/>
              <label htmlFor="search_checkbox_14">Спорт</label></li>
            <li>
              <input type="checkbox" checked={this.state.params.genres.includes('simulator')} id="search_checkbox_15" value="simulator" onChange={() => this.handleTagChange('simulator')}/>
              <label htmlFor="search_checkbox_15">Симуляторы</label></li>
            <li>
              <input type="checkbox" checked={this.state.params.genres.includes('coop')} id="search_checkbox_16" value="coop" onChange={() => this.handleTagChange('coop')}/>
              <label htmlFor="search_checkbox_16">Кооператив</label></li>
            <li>
              <input type="checkbox" checked={this.state.params.genres.includes('battleroyale')} id="search_checkbox_17" value="battleroyale" onChange={() => this.handleTagChange('battleroyale')}/>
              <label htmlFor="search_checkbox_17">Королевская битва</label></li>
            <li>
              <input type="checkbox" checked={this.state.params.genres.includes('post-apocalyptic')} id="search_checkbox_18" value="post-apocalyptic" onChange={() => this.handleTagChange('post-apocalyptic')}/>
              <label htmlFor="search_checkbox_18">Пост-апокалипсис</label></li>
          </ul>

        </div>
      </div>
    );
  }
}

export default  withRouter(SearchPage);
