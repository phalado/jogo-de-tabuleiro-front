import React from "react";
import { endGame } from "../services/ApiServices";

import styles from "../styles/EndGameButton";

const EndGameButton = (props) => {
  const { gameData, setMinimaps } = props;

  const changeGameStatus = () => {
    if (window.confirm("Tem certeza que deseja finalizar este jogo?"))
      endGame(gameData.gameId).then((answer) => setMinimaps([]));

    return null;
  };

  return (
    <button style={styles.button} onClick={() => changeGameStatus()}>
      Finalizar jogo
    </button>
  );
};

export default EndGameButton;
