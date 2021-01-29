import React from 'react';
import './ActivationTemplateStyle/ActivationTemplateStyle.css';

class ActivationTemplateOrigin extends React.Component{
  render(){
    return(
      <div className="activation_page">
        <h3>Как активировать ключ Origin?</h3>
        <ul className="activation_description">
          <li className="activation_description--elem">
            <span>Скачать и установить клиент Origin по <a href="https://www.origin.com/rus/ru-ru/store/download">ссылке</a>.</span>
          </li>
          <li className="activation_description--elem">
            <span>Ввести свой логин и пароль или создать учётную запись.</span>
          </li>
          <li className="activation_description--elem activation_description--elem_img">
            <span>В меню выбрать пункт «Активировать код продукта».</span>
            <div><img className="origin_img" src={require('./origin.png')} alt="origin_activaion"/></div>
          </li>
          <li className="activation_description--elem">
            <span>Ввести ключ в появившемся окне.</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default ActivationTemplateOrigin;
