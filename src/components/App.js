import React, { useEffect, useState } from "react";
import { ReactSession } from "react-client-session";

import Map from "../containers/Map";
import Menu from "./Menu";
import ActionSubMenu from "../containers/ActionSubMenu";

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
    setEnemies,
  } = props;

  const [repeater, setRepeater] = useState(0);
  const [action, setAction] = useState("menu");

  useEffect(() => {
    const setStateAfterRequest = (data) => {
      console.log(data);
      setEnemies(data.enemies);
      setCharacters(data.characters);
      setDoors(data.doors);
      setChests(data.chests);
      setGameData(data.gameData);
      setMinimaps(data.minimaps);
    };

    const callUpdateService = () => {
      const service = requestGameData(ReactSession.get("gameId"));
      service.then((answer) => setStateAfterRequest(answer.data));
    };

    callUpdateService();

    // setTimeout(() => setRepeater((prevState) => prevState + 1), 1000);
  }, [setChests, setDoors, setMinimaps, setGameData, setCharacters, repeater]);

  const SubMenu = () => {
    if (gameData.open === false) return null;

    return (
      <div style={styles.asideBar}>
        <div style={styles.gameData}>
          <span>Round: {gameData.round}</span>
          <span>Jogador atual: {gameData.roundOrder[0]}</span>
          <span>Açoes gerais: {gameData.generalActions}</span>
          <span>Ações de movimento: {gameData.moveActions}</span>
          <span>Açoes de ataque: {gameData.atackActions}</span>
          <span>Açoes de cenário: {gameData.sceneryActions}</span>
          <span>Level da fase: {gameData.gameLevel}</span>
        </div>
        <ActionSubMenu action={action} setAction={setAction} />
      </div>
    );
  };

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
      {SubMenu()}
      <Menu gameData={gameData} setMinimaps={setMinimaps} />
    </div>
  );
};

export default App;
