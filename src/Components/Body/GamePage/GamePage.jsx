import React from 'react';
import './GamePage.css'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import api from './../../../Api/api.js';
import GameActivation from './GameActivation/GameActivation.jsx';
import GameDescription from './GameDescription/GameDescription.jsx';
import GameRequirements from './GameRequirements/GameRequirements.jsx';
import GameProduct from './GameProduct/GameProduct.jsx';
import GameCharacteristics from './GameCharacteristics/GameCharacteristics.jsx';
import Preloader from './../../Preloader/Preloader.jsx';
import { currencyConverter } from './../../../Functions/CurrencyConverter.js';
import { distConverter } from './../../../Functions/DistConverter.js';


class GamePage extends React.Component{
  state = {
    main_game: {
      product: {
        prices: {}
      }
    },
    another_products: [],
    preloaderStatus: true
  }

  async componentDidMount(){
    try{
      const game_url = this.props.location.pathname.slice(6),
            data = await api.get_game_page({game_url});
      this.setState({
        main_game: data.data.main_game,
        another_products: data.data.other_game_products,
        preloaderStatus: false
      });
      document.title = 'Купить ' + data.data.main_game.name
    } catch (error){
      console.log(error);
    }

    this.unlisten = this.props.history.listen(async (location, action) => {
      let exactLocation = location.pathname.split('/');
      if(exactLocation[1] === 'game' && exactLocation[2]){
        this.setState({
          main_game: {
            product: {
              prices: {}
            }
          },
          another_products: [],
          preloaderStatus: true
        })
        try{
          const game_url = exactLocation[2],
                data = await api.get_game_page({game_url});
          this.setState({
            main_game: data.data.main_game,
            another_products: data.data.other_game_products,
            preloaderStatus: true
          });
        } catch (error){
          console.log(error);
        }
      }
    });
  }

  handleIfHashChange = async () => {
    this.setState({
      main_game: {
        product: {
          prices: {}
        }
      },
      another_products: []
    });
    try{
      const game_url = this.props.location.pathname.slice(6),
            data = await api.get_game_page({game_url});
      this.setState({
        main_game: data.data.main_game,
        another_products: data.data.other_game_products
      });
    } catch (error){
      console.log(error);
    }
  }

  handleRedirectURL = url => {
    window.location = `https://www.digiseller.market/asp/pay_wm.asp?id_d=${url}&ai=880508`;
  }

  render(){
    const productList = this.state.another_products.map((el, index) =>
      <GameProduct
        key={'game_product-' + index}
        currentCurrency={this.props.currentCurrency}
        {...el}
      />
    )

    return(
      <section className="game_wrapper">
        {
          this.state.preloaderStatus ?
          <div className="preloader_game--page">
            <div className="preloader_game--page_wrapper"><Preloader gamePage={true}/></div>
          </div>
          :
          <React.Fragment>
            <div className="game_wrapper--left">
              <div className="aspect_ratio--16_9">
                <div className="game_wrapper--video">
                  <iframe className="game_video--frame" src={'https://youtube.com/embed/' + this.state.main_game.video} frameBorder='0' allow='autoplay; encrypted-media' allowFullScreen title='video'/>
                </div>
              </div>
              <div className="game_wrapper--name_activation">
                <div className ="game_wrapper--name">
                  <h1>{this.state.main_game.name}</h1>
                </div>
                {this.state.main_game.product.distributor && <GameActivation distributor={this.state.main_game.product.distributor} region={this.state.main_game.region}/>}
              </div>

                {this.state.main_game.description && <GameDescription description={this.state.main_game.description}/>}

                {this.state.main_game.requirements && <GameRequirements requirements={this.state.main_game.requirements}/>}

            </div>
            <div className="game_wrapper--right">
              <div className="game_wrapper--image">
                <img src={this.state.main_game.image2} alt="#"/>
                <div className="game_wrapper--image_price">
                  {this.props.currentCurrency === 'RUB' && this.state.main_game.product.prices.price_rub}
                  {this.props.currentCurrency === 'UAH' && this.state.main_game.product.prices.price_uah}
                  {this.props.currentCurrency === 'USD' && this.state.main_game.product.prices.price_usd}
                  {this.props.currentCurrency === 'EUR' && this.state.main_game.product.prices.price_eur}
                  <span>{currencyConverter(this.props.currentCurrency)}</span>
                </div>
                {
                  this.state.main_game.preoder &&
                  <div className="game_wrapper--image_preoder">
                    Предзаказ
                  </div>
                }
                <div className="game_wrapper--image_dist">
                  {distConverter(this.state.main_game.product.distributor)}
                </div>
              </div>
              <div className="game_wrapper--buy">
                <div  onClick={() => this.handleRedirectURL(this.state.main_game.product.product_id)} className="game_wrapper--buy_button">Купить</div>
              </div>
              <div className="game_wrapper--name_activation">
                <div className ="game_wrapper--name">
                  <h1>{this.state.main_game.name}</h1>
                </div>

                {this.state.main_game.region && <GameActivation region={this.state.main_game.region}/>}
              </div>
              {
                !!this.state.another_products.length &&
                <div className="game_wrapper--product_list">
                  <ul className="game_product--list">

                    {productList}

                  </ul>
                </div>
              }
              <GameCharacteristics
                characteristics={{
                  genres: this.state.main_game.genres,
                  developer: this.state.main_game.developer,
                  publisher: this.state.main_game.publisher,
                  language: this.state.main_game.language,
                  release_date: this.state.main_game.release_date,
                }}
              />



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

export default withRouter(connect(mapStateToProps)(GamePage));
