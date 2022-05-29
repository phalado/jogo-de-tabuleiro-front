import React from "react";

import Images from "../../constants/Images";
import styles from "../../styles/App";

const JoinGame = (props) => {
  const { joinGame, setJoin } = props;

  return (
    <div style={styles.window}>
      <img
        src={Images.background}
        style={styles.backgroundImage}
        alt="Background random img"
      />
      <div style={styles.buttonContainer}>
        <label style={styles.label} for="id">
          ID do jogo:
        </label>
        <input style={styles.input} type="id" id="id" name="id" />
        <button
          style={styles.newGameButton}
          onClick={() => joinGame(document.getElementById("id").value)}
        >
          Entrar
        </button>
        <button style={styles.newGameButton} onClick={() => setJoin("start")}>
          Voltar
        </button>
      </div>
    </div>
  );
};

export default JoinGame;
