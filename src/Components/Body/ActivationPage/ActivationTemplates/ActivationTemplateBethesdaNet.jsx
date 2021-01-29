import React from 'react';
import './ActivationTemplateStyle/ActivationTemplateStyle.css';

class ActivationTemplateBethesdaNet extends React.Component{
  render(){
    return(
      <div className="activation_page">
        <h3>Как активировать ключ Bethesda.net?</h3>
        <ul className="activation_description">
          <li className="activation_description--elem">
            <span>Скачать и установить Bethesda Launcher по <a href="https://bethesda.net/ru/game/bethesda-launcher">ссылке</a>.</span>
          </li>
          <li className="activation_description--elem">
            <span>Ввести свой логин и пароль или создать учётную запись.</span>
          </li>
          <li className="activation_description--elem activation_description--elem_img">
            <span>Нажать на иконку меню в верхем левом углу, выбрать пункт «Активировать код».</span>
            <div><img className="bethesdanet_img" src={require('./bethesdanet.png')} alt="bethesdanet_activaion"/></div>
          </li>
          <li className="activation_description--elem">
            <span>Ввести ключ в появившемся окне.</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default ActivationTemplateBethesdaNet;
