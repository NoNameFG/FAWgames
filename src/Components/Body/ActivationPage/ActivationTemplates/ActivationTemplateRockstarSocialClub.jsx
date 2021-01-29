import React from 'react';

class ActivationTemplateRockstarSocialClub extends React.Component{
  render(){
    return(
      <div className="activation_page">
        <h3>Как активировать ключ Social Club?</h3>
        <ul className="activation_description">
          <li className="activation_description--elem">
            <span>Скачать и установить Rockstar Games Launcher по <a href="https://ru.socialclub.rockstargames.com/rockstar-games-launcher">ссылке</a>.</span>
          </li>
          <li className="activation_description--elem">
            <span>Ввести свой логин и пароль или создать учётную запись.</span>
          </li>
          <li className="activation_description--elem activation_description--elem_img">
            <span>Нажать на значок учётной записи в верхем правом углу, выбрать пункт меню «Использовать код».</span>
            <div><img className="socialclub_img" src={require('./socialclub.png')} alt="bethesdanet_activaion"/></div>
          </li>
          <li className="activation_description--elem">
            <span>Ввести ключ в появившемся окне.</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default ActivationTemplateRockstarSocialClub;
