import React from 'react';
import './ActivationTemplateStyle/ActivationTemplateStyle.css';

class ActivationTemplateUplay extends React.Component{
  render(){
    return(
      <div className="activation_page">
        <h3>Как активировать ключ Uplay?</h3>
        <ul className="activation_description">
          <li className="activation_description--elem">
            <span>Скачать и установить клиент Uplay по <a href="https://uplay.ubisoft.com/ru-RU">ссылке</a>.</span>
          </li>
          <li className="activation_description--elem">
            <span>Ввести свой логин и пароль или создать учётную запись.</span>
          </li>
          <li className="activation_description--elem activation_description--elem_img">
            <span>В меню выбрать пункт «Активировать код продукта».</span>
            <div><img className="uplay_img" src={require('./uplay.png')} alt="uplay_activaion"/></div>
          </li>
          <li className="activation_description--elem">
            <span>Ввести ключ в появившемся окне.</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default ActivationTemplateUplay;
