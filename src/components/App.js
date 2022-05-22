import React, { useEffect } from "react";

import Map from "../containers/Map";

import Images from "../constants/Images";
import { RequestGameData } from "../services/ApiServices";
import styles from "../styles/App";
// import CharacterModal from "../containers/CharacterModal";
// import AtackModal from "../containers/AtackModal";
// import Player from "../models/Player";
// import Enemy from "../models/Enemy";

const App = (props) => {
  const { setMinimaps, setChests, setDoors, setGameData } = props;

  useEffect(() => {
    const setStateAfterRequest = (data) => {
      setDoors(data.doors);
      setChests(data.chests);
      setGameData(data.gameData);
      setMinimaps(data.minimaps);
    };

    //   closeModal();
    const service = RequestGameData("01");
    service.then((answer) => {
      console.log(answer.data);
      setStateAfterRequest(answer.data);
    });
  }, [setChests, setDoors, setMinimaps, setGameData]);

  return (
    <div style={styles.window}>
      <img
        src={Images.background}
        style={styles.backgroundImage}
        alt="Background random img"
      />
      <Map />
      {/* <CharacterModal />
      <AtackModal /> */}
    </div>
  );
};

export default App;
