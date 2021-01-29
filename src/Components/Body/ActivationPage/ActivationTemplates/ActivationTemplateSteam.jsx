import React from 'react';
import './ActivationTemplateStyle/ActivationTemplateStyle.css';

class ActivationTemplateSteam extends React.Component{
  render(){
    return(
      <div className="activation_page">
        <h3>Как активировать ключ Steam?</h3>
        <ul className="activation_description">
          <li className="activation_description--elem">
            <span>Скачать и установить клиент Steam по <a href="https://store.steampowered.com/about/">ссылке</a>.</span>
          </li>
          <li className="activation_description--elem">
            <span>Ввести свой логин и пароль или создать учётную запись.</span>
          </li>
          <li className="activation_description--elem activation_description--elem_img">
            <span>В меню «Игры» выбрать пункт «Активировать через Steam».</span>
            <div><img src={require('./steam.png')} alt="steam_activaion"/></div>
          </li>
          <li className="activation_description--elem">
            <span>Ввести ключ в появившемся окне.</span>
          </li>
        </ul>
        <h3>Как активировать игру Steam в другом регионе?</h3>
        <ul className="activation_description">
          <li className="activation_description--elem">
            <span>Скачать и установить VPN приложение на сайте <a href="https://hidemy.name">hidemy.name</a>.</span>
          </li>
          <li className="activation_description--elem">
            <span>Получить тестовый доступ по ссылке: <a href="https://hidemy.name/ru/demo/">hidemy.name</a>.</span>
          </li>
          <li className="activation_description--elem">
            <span>Выбрать нужный регион в приложении.</span>
          </li>
          <li className="activation_description--elem">
            Войти в приложение Steam и выбрать пункт "Об аккаунте". Изменить страну на нужную.
          </li>
        </ul>
      </div>
    );
  }
}

export default ActivationTemplateSteam;
