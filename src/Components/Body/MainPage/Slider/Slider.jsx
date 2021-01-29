import React from 'react';
import './Slider.css';
import api from './../../../../Api/api.js';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { currencyConverter } from './../../../../Functions/CurrencyConverter.js';
import { distConverter } from './../../../../Functions/DistConverter.js';
import Preloader from './../../../Preloader/Preloader.jsx';
//Добавить в зависимости от размеров окна

class Slider extends React.Component{
  constructor(props){
    super(props);
    this.mainImg = React.createRef();
    this.secondImg = React.createRef();
    this.thirdImg = React.createRef();
  }

  state = {
    games: [],
    currentPage: 1,
    preloaderStatus: true
  }

  handleSetInterval = () => {
    if(this.mainImg && this.secondImg && this.thirdImg && this.state.games.length){
      this.intervalPageChange = setInterval(() => {
        this.mainImg.current.style.opacity = '0';
        this.secondImg.current.style.opacity = '0';
        this.thirdImg.current.style.opacity = '0';
        this.handleSetTimeout({direction: 'right'});
      }
      , 8600);
    }
  }

  handleSetTimeout = data => {
    if(this.mainImg && this.secondImg && this.thirdImg){
      this.timeoutPageChange = setTimeout(() => {
        if(data.direction){
          if(data.direction === 'left'){
            this.setState({
              currentPage: this.state.currentPage === 1 ? 3 : this.state.currentPage-1
            })
          } else {
            this.setState({
              currentPage: this.state.currentPage === 3 ? 1 : this.state.currentPage+1
            })
          }
        } else if(data.page) {
          this.setState({
            currentPage: data.page
          })
        }
        this.mainImg.current.style.opacity = '1';
        this.secondImg.current.style.opacity = '1';
        this.thirdImg.current.style.opacity = '1';
      } ,400)
    }
  }

  async componentDidMount(){
    document.title = 'FAWgames.com – Интернет-магазин компьютерных игр';
    try{
      const data = await api.get_slider_games();
      this.setState({
        games: data.data,
        preloaderStatus: false
      })
    } catch(error){
      console.log(error);
    }
    this.handleSetInterval();
  }

  handleChangeCurrentPage = data => {
    this.mainImg.current.style.opacity = '0';
    this.secondImg.current.style.opacity = '0';
    this.thirdImg.current.style.opacity = '0';
    clearInterval(this.intervalPageChange);
    this.handleSetTimeout({direction: data.direction, page: data.page})
    this.handleSetInterval();
  }

  componentWillUnmount(){
    clearInterval(this.intervalPageChange);
    clearTimeout(this.timeoutPageChange);
    delete this.mainImg;
    delete this.secondImg;
    delete this.thirdImg;
  }

  handleGameClick = url => {
    this.props.push(`/game/${url}`);
  }

  render(){
    let mainDistList = [], secondDistList = [], thirdListDist = [];
    if(this.state.games.length){
      mainDistList = this.state.games[this.state.currentPage*3 - 3].distributor.map(el => distConverter(el));
      secondDistList = this.state.games[this.state.currentPage*3 - 2].distributor.map(el => distConverter(el));
      thirdListDist = this.state.games[this.state.currentPage*3 - 1].distributor.map(el => distConverter(el));
    }

    return(
      <section className="slider">
        {this.state.preloaderStatus ?
        <div className="preloader_slider"><Preloader/></div>
          :
        <React.Fragment>
          <div className="slider_holder">
            <Link className="slider_template--main" to={this.state.games.length ? '/game/'+this.state.games[this.state.currentPage*3 - 3].game_url : ''}>
              <div className="slider_template--anm" ref={this.mainImg}>
                {
                  this.state.games.length ?
                    <React.Fragment>
                      <img className="main_game--img" alt="game_name" src={this.state.games[this.state.currentPage*3 - 3].image1} />
                      <div className="main_game--price">
                        {this.props.currentCurrency === 'RUB' && this.state.games[this.state.currentPage*3 - 3].prices.price_rub}
                        {this.props.currentCurrency === 'UAH' && this.state.games[this.state.currentPage*3 - 3].prices.price_uah}
                        {this.props.currentCurrency === 'USD' && this.state.games[this.state.currentPage*3 - 3].prices.price_usd}
                        {this.props.currentCurrency === 'EUR' && this.state.games[this.state.currentPage*3 - 3].prices.price_eur}
                        <span className="search_price--currency">{currencyConverter(this.props.currentCurrency)}</span>
                      </div>
                    </React.Fragment>
                    :
                    null
                }

                <div className="game_template--dist">
                  {mainDistList}
                </div>
              </div>

            </Link>
            <div className="back_arrow" onClick={() => this.handleChangeCurrentPage({direction: 'left'})}>
              <div className="arrow_holder">
                <span className="arrow--top_line"></span>
                <span className="arrow--bottom_line"></span>
              </div>
            </div>
            <div className="next_arrow"  onClick={() => this.handleChangeCurrentPage({direction: 'right'})}>
              <div className="arrow_holder">
                <span className="arrow--top_line"></span>
                <span className="arrow--bottom_line"></span>
              </div>
            </div>
            <div className="slider_template--secondary">
              <Link to={this.state.games.length ? '/game/'+this.state.games[this.state.currentPage*3 - 2].game_url : ''}>
                <div className="slider_template--anm" ref={this.secondImg}>
                  {
                    this.state.games.length ?
                      <React.Fragment>
                        <img className="secondary_game--img" id="slider_secondary--first_img" alt="game_name" src={this.state.games[this.state.currentPage*3 - 2].image1}/>
                        <div className="secondary_game--price">
                          {this.props.currentCurrency === 'RUB' && this.state.games[this.state.currentPage*3 - 2].prices.price_rub}
                          {this.props.currentCurrency === 'UAH' && this.state.games[this.state.currentPage*3 - 2].prices.price_uah}
                          {this.props.currentCurrency === 'USD' && this.state.games[this.state.currentPage*3 - 2].prices.price_usd}
                          {this.props.currentCurrency === 'EUR' && this.state.games[this.state.currentPage*3 - 2].prices.price_eur}
                          <span className="search_price--currency">{currencyConverter(this.props.currentCurrency)}</span>
                        </div>
                      </React.Fragment>
                      :
                      null //PRELOADER
                  }
                  <div className="game_template--dist" id="first_dist">
                    {secondDistList}
                  </div>
                </div>
              </Link>

              <Link to={this.state.games.length ? '/game/'+this.state.games[this.state.currentPage*3 - 1].game_url : ''}>
                <div className="slider_template--anm" ref={this.thirdImg}>
                  {
                    this.state.games.length ?
                      <React.Fragment>
                        <img className="secondary_game--img" alt="game_name" id="slider_secondary--second_img"  src={this.state.games[this.state.currentPage*3 - 1].image1} />
                        <div className="secondary_game--price">
                          {this.props.currentCurrency === 'RUB' && this.state.games[this.state.currentPage*3 - 1].prices.price_rub}
                          {this.props.currentCurrency === 'UAH' && this.state.games[this.state.currentPage*3 - 1].prices.price_uah}
                          {this.props.currentCurrency === 'USD' && this.state.games[this.state.currentPage*3 - 1].prices.price_usd}
                          {this.props.currentCurrency === 'EUR' && this.state.games[this.state.currentPage*3 - 1].prices.price_eur}
                          <span className="search_price--currency">{currencyConverter(this.props.currentCurrency)}</span>
                        </div>
                      </React.Fragment>
                      :
                      null //PRELOADER
                  }
                  <div className="game_template--dist" id="second_dist">
                    {thirdListDist}
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="slider_switch">
            <span className={`slider_switch--dott${this.state.currentPage === 1 ? '-active' : ''}`} data-position="1" onClick={() => this.handleChangeCurrentPage({page: 1})}></span>
            <span className={`slider_switch--dott${this.state.currentPage === 2 ? '-active' : ''}`} data-position="2" onClick={() => this.handleChangeCurrentPage({page: 2})}></span>
            <span className={`slider_switch--dott${this.state.currentPage === 3 ? '-active' : ''}`} data-position="3" onClick={() => this.handleChangeCurrentPage({page: 3})}></span>
          </div>
        </React.Fragment>
        }
      </section>
    );
  }
}


function mapStateToProps(state){
  return{
    currentCurrency: state.currentCurrency
  }
}


export default withRouter(connect(mapStateToProps)(Slider));
