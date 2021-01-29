import React from "react";

function GameDescription(props) {
  return (
    <div className="game_wrapper--description">
      <h2>Описание</h2>
      {props.description}
    </div>
  );
}

export default GameDescription;
