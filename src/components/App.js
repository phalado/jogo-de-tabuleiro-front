import React, { useEffect, useState } from "react";

import Map from "../containers/Map";
import Menu from "./Menu";

import Images from "../constants/Images";
import { requestGameData } from "../services/ApiServices";
import styles from "../styles/App";
// import CharacterModal from "../containers/CharacterModal";
// import AtackModal from "../containers/AtackModal";

const App = (props) => {
  const {
    gameData,
    setMinimaps,
    setChests,
    setDoors,
    setGameData,
    setCharacters,
  } = props;

  const [repeater, setRepeater] = useState(0);

  useEffect(() => {
    const setStateAfterRequest = (data) => {
      setDoors(data.doors);
      setChests(data.chests);
      setGameData(data.gameData);
      setCharacters(data.characters);
      setMinimaps(data.minimaps);
    };

    const callUpdateService = () => {
      const service = requestGameData(gameData.gameId);
      service.then((answer) => setStateAfterRequest(answer.data));
    };

    callUpdateService();

    //   closeModal();
    // const interval = setInterval(() => callUpdateService, 1000);
    setTimeout(() => setRepeater((prevState) => prevState + 1), 1000);
  }, [setChests, setDoors, setMinimaps, setGameData, setCharacters, repeater]);

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
      <Menu gameData={gameData} setMinimaps={setMinimaps} />
    </div>
  );
};

export default App;
