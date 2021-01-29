import React from 'react';
import { withRouter } from 'react-router-dom';
import api from './../../../../Api/api.js';
import GameTemplate from './../../MainPage/GameList/GameTemplate/GameTemplate.jsx';
import Preloader from './../../../Preloader/Preloader.jsx';

class GameListSearch extends React.Component{
  state = {
    pageCount: 0,
    games: [],
    currentPage: 1,
    listLeftIndent: 0,
    preloaderStatus: true,
    reqData: {}
  }

  async componentDidMount(){
    this.unlisten = this.props.history.listen(async (location, action) => {
      if(location.pathname === '/search'){
        this.setState({
          preloaderStatus: true
        });
        this.handleRedirectURLorLoad(location.search);
      }
    })
  }

  componentWillUnmount(){
    this.unlisten();
  }

  handleRedirectURLorLoad = async location => {
    let reqData = {};

    let params = new URLSearchParams(location),
        tag = params.get('tag'),
        genres = params.getAll('genres'),
        page = params.get('page');

    if(genres.length){
      reqData.genres = genres;
    }
    if(tag) reqData.tag = tag;
    if(page){
      reqData.page = page;
      this.handleIndentChange(page);
      this.setState({
        currentPage: +page
      })
    }

    this.props.paramsValueChange(reqData);

    try{
      const page_count = await api.get_game_search_count_page(reqData);
      const data = await api.get_template_game_search(reqData);
      this.setState({
        games: data.data,
        preloaderStatus: false,
        pageCount: page_count.data.pageCount
      })
    } catch(error){
      console.log(error);
    }
  }

  handlePageChange = async page => {
    if(!this.state.preloaderStatus){
      this.setState({
        currentPage: page
      })
      let params = new URLSearchParams(this.props.location.search);

      params.set('page', page);

      this.props.history.push('/search?' + params.toString());

      this.handleIndentChange(page);
    }
  }

  handleIndentChange = page => {
    let factor = page - 3;
    if(page - 3 < 0){
      factor = 0
    } else if(this.state.pageCount - page <= 1){
      factor = this.state.pageCount - 5
    }
    this.setState({
      listLeftIndent: -30 * factor
    });
  }

  handleArrowPageChange = async direction => {
    if(!this.state.preloaderStatus && this.state.pageCount > 1){
      try{
        let params = new URLSearchParams(this.props.location.search);
        this.setState({
          preloaderStatus: true
        });
        if(direction === 'left' && this.state.currentPage !== 1){
          params.set('page', this.state.currentPage - 1);
          this.setState({
            currentPage: this.state.currentPage - 1
          });
        }else if(direction === 'right' && this.state.currentPage !== this.state.pageCount){
          params.set('page', this.state.currentPage + 1);
          this.setState({
            currentPage: this.state.currentPage + 1
          });
        }
        this.handleIndentChange(this.state.currentPage);
        this.props.history.push('/search?' + params.toString());
      } catch (error){
        console.log(error);
      }
    }
  }

  render(){
    const pageList = [];
    if(this.state.pageCount){
      for(let i = 1; i<=this.state.pageCount; i++){
        pageList.push(
          <li
            className={`pagination_page--numeration_list--item${this.state.currentPage === i ? ' active' : ''}`}
            onClick={() => this.handlePageChange(i)}
            key={'page_num_' + i}
          >
            {i}
          </li>
        );
      }
    }

    const gameList = this.state.games.map((el, index) =>
      <GameTemplate
        key={'game_template_' + index}
        data={el}
      />
    );


    return(
      <section className="search_page--game_list">
        {
          this.state.preloaderStatus ?
            <div className="preloader_template"><Preloader/></div>
            :
            <React.Fragment>
              <div className="game_list--wrapper">
                {gameList}
              </div>
              {
                gameList.length ?
                <div className="game_list--pagination">
                  <div className="game_list--pagination_wrapper">
                    <div className="pagination_arrow--prev" onClick={() => this.handleArrowPageChange('left')}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,14.071L8.179,10.25c-0.414-0.414-1.086-0.414-1.5,0l0,0c-0.414,0.414-0.414,1.086,0,1.5l4.614,4.614 c0.391,0.391,1.024,0.391,1.414,0l4.614-4.614c0.414-0.414,0.414-1.086,0-1.5v0c-0.414-0.414-1.086-0.414-1.5,0L12,14.071z"></path></svg>
                    </div>
                    <div className="pagination_page--numeration">
                      <div className="pagination_page--wrapper">
                        <ul style={{left: this.state.pageCount > 5 ? this.state.listLeftIndent + 'px' : 'none'}} className="pagination_page--numeration_list">
                          {pageList}
                        </ul>
                      </div>
                    </div>
                    <div className="pagination_arrow--next" onClick={() => this.handleArrowPageChange('right')}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,14.071L8.179,10.25c-0.414-0.414-1.086-0.414-1.5,0l0,0c-0.414,0.414-0.414,1.086,0,1.5l4.614,4.614 c0.391,0.391,1.024,0.391,1.414,0l4.614-4.614c0.414-0.414,0.414-1.086,0-1.5v0c-0.414-0.414-1.086-0.414-1.5,0L12,14.071z"></path></svg>
                    </div>
                  </div>
                </div>
                :
                <p class="game_list--not_found">Игр не найдено</p>
              }
            </React.Fragment>
        }
      </section>
    );
  }
}

export default withRouter(GameListSearch);
