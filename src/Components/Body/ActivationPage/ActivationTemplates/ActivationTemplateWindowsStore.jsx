import React from 'react';

class ActivationTemplateWindowsStore extends React.Component{
  render(){
    return(
      <div className="activation_page">
        <h3>Как активировать ключ Microsoft Store?</h3>
        <ul className="activation_description">
          <li className="activation_description--elem">
            <span>На устройстве Windows 10 на панеле задач выбрать Microsoft Store.</span>
          </li>
          <li className="activation_description--elem">
            <span>У Microsoft Store выберите меню «Дополнительно».</span>
          </li>
          <li className="activation_description--elem activation_description--elem_img">
            <span>Выберите «Активировать код.</span>
          </li>
          <li className="activation_description--elem">
            <span>Ввести ключ в появившемся окне.</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default ActivationTemplateWindowsStore;
