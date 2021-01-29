import React from 'react';
import './ActivationTemplateStyle/ActivationTemplateStyle.css';

class ActivationTemplateBattleNet extends React.Component{
  render(){
    return(
      <div className="activation_page">
        <h3>Как активировать ключ Battle.net?</h3>
        <ul className="activation_description">
          <li className="activation_description--elem">
            <span>Скачать и установить клиент Battle.net по <a href="https://www.blizzard.com/ru-ru/apps/battle.net/desktop">ссылке</a>.</span>
          </li>
          <li className="activation_description--elem">
            <span>Ввести свой логин и пароль или создать учётную запись.</span>
          </li>
          <li className="activation_description--elem activation_description--elem_img">
            <span>В меню выбрать пункт «Активировать код».</span>
            <div><img className="battlenet_img" src={require('./battlenet.png')} alt="battle.net_activaion"/></div>
          </li>
          <li className="activation_description--elem">
            <span>Ввести ключ в появившемся окне.</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default ActivationTemplateBattleNet;
