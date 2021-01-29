import React from 'react';

class ActivationTemplateGOGcom extends React.Component{
  render(){
    return(
      <div className="activation_page">
        <h3>Как активировать ключ GOG.com?</h3>
        <ul className="activation_description">
          <li className="activation_description--elem">
            <span>Скачать и установить клиент GOG GALAXY по <a href="https://www.gog.com/galaxy">ссылке</a>.</span>
          </li>
          <li className="activation_description--elem">
            <span>Ввести свой логин и пароль или создать учётную запись.</span>
          </li>
          <li className="activation_description--elem activation_description--elem_img">
            <span>Активируйте код по <a href="https://www.gog.com/redeem">ссылке</a>.</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default ActivationTemplateGOGcom;
