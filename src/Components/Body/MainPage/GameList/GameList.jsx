import React from 'react';
import './GameList.css';
import api from './../../../../Api/api.js';
import GameTemplate from './GameTemplate/GameTemplate.jsx';
import Preloader from './../../../Preloader/Preloader.jsx';


class GameList extends React.Component{
  state = {
    pageCount: 0,
    games: [],
    currentPage: 1,
    listLeftIndent: 0,
    preloaderStatus: true
  }

  async componentDidMount(){
    try{
      const page_count = await api.get_template_count_page();
      const data = await api.get_template_games({page: this.state.currentPage});
      this.setState({
        pageCount: page_count.data.pageCount,
        games: data.data,
        preloaderStatus: false
      })
    } catch(error){
      console.log(error);
    }
  }

  handlePageChange = async page => {
    if(!this.state.preloaderStatus){
      try{
        this.setState({
          preloaderStatus: true
        });
        const data = await api.get_template_games({page});
        this.setState({
          currentPage: page,
          games: data.data,
          preloaderStatus: false
        });
        this.handleIndentChange(page);
      } catch (error){
        console.log(error);
      }
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
        this.setState({
          preloaderStatus: true
        });
        if(direction === 'left' && this.state.currentPage !== 1){
          const data = await api.get_template_games({page: this.state.currentPage - 1});
          this.setState({
            currentPage: this.state.currentPage - 1,
            games: data.data,
            preloaderStatus: false
          });
        }else if(direction === 'right' && this.state.currentPage !== this.state.pageCount){
          const data = await api.get_template_games({page: this.state.currentPage + 1});
          this.setState({
            currentPage: this.state.currentPage + 1,
            games: data.data,
            preloaderStatus: false
          });
        }
        this.handleIndentChange(this.state.currentPage);
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
      <section className="game_list">
        {
          this.state.preloaderStatus ?
            <div className="preloader_template"><Preloader/></div>
            :
            <React.Fragment>
              <div className="game_list--wrapper">
                {gameList}
              </div>
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
            </React.Fragment>
        }
      </section>
    );
  }
}

export default GameList;
