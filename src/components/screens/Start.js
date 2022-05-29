import React from "react";

import Images from "../../constants/Images";
import styles from "../../styles/App";

const Start = (props) => {
  const { createGame, setJoin } = props;

  return (
    <div style={styles.window}>
      <img
        src={Images.background}
        style={styles.backgroundImage}
        alt="Background random img"
      />
      <div style={styles.buttonContainer}>
        <button style={styles.newGameButton} onClick={() => createGame()}>
          Novo jogo
        </button>
        <button style={styles.newGameButton} onClick={() => setJoin("join")}>
          Juntar-se a um amigo
        </button>
      </div>
    </div>
  );
};

export default Start;
