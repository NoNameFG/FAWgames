import React from "react";

function GameRequirements(props) {
  return (
    <div className="game_wrapper--requirements">
      <h3>Системные требования</h3>
      <ul className="requirements_list">
        <li className="requirements_list--item">
          <div className="requirements_list--item_key">Процессор</div>
          <div className="requirements_list--item_value">{props.requirements.processor}</div>
        </li>
        <li className="requirements_list--item">
          <div className="requirements_list--item_key">Оперативная память</div>
          <div className="requirements_list--item_value">{props.requirements.ram}</div>
        </li>
        <li className="requirements_list--item">
          <div className="requirements_list--item_key">Видеокарта</div>
          <div className="requirements_list--item_value">{props.requirements.video_card}</div>
        </li>
        <li className="requirements_list--item">
          <div className="requirements_list--item_key">Место на диске</div>
          <div className="requirements_list--item_value">{props.requirements.disk_space}</div>
        </li>
      </ul>
    </div>
  );
}

export default GameRequirements;
