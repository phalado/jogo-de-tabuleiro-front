import React, { useState } from "react";
import { ReactSession } from "react-client-session";

import { endGame } from "../services/ApiServices";

import Images from "../constants/Images";
import styles from "../styles/Menu";

const Menu = (props) => {
  const { gameData, setMinimaps } = props;

  const [dropdownStyle, setDropdownStyle] = useState(styles.dropdownContainer);

  const showMenu = () => {
    setDropdownStyle({
      ...dropdownStyle,
      display: dropdownStyle.display === "block" ? "none" : "block",
    });
  };

  const changeGameStatus = () => {
    if (window.confirm("Tem certeza que deseja finalizar este jogo?")) {
      ReactSession.remove("gotData");
      ReactSession.remove("gameId");
      ReactSession.set("render", "start");
      endGame(gameData.gameId).then(() => setMinimaps([]));
    }

    return null;
  };

  const changeUserStatus = () => {
    if (window.confirm("Tem certeza que deseja fazer log out?")) {
      ReactSession.remove("id");
      ReactSession.remove("username");
      ReactSession.remove("email");
      ReactSession.remove("gotData");
      ReactSession.remove("gameId");
      ReactSession.remove("render");
    }

    return null;
  };

  return (
    <div>
      <img
        src={Images.menuIcon}
        style={styles.menuIcon}
        onClick={() => showMenu()}
        alt="Menu icon"
      />
      <div style={dropdownStyle}>
        <button
          style={styles.dropdownButton}
          onClick={() => changeUserStatus()}
        >
          Log out
        </button>
        <button
          style={styles.dropdownButton}
          onClick={() => changeGameStatus()}
        >
          Encerrar jogo
        </button>
      </div>
    </div>
  );
};

export default Menu;
