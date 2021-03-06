import React, { useEffect, useState } from "react";
import { ReactSession } from "react-client-session";

import Map from "../containers/Map";
import Menu from "./Menu";
import ActionSubMenu from "../containers/ActionSubMenu";
import CharacterModal from "../containers/CharacterModal";
import AtackModal from "../containers/AtackModal";

import Images from "../constants/Images";
import { requestGameData } from "../services/ApiServices";
import styles from "../styles/App";

const App = (props) => {
  const {
    characters,
    enemies,
    gameData,
    setMinimaps,
    setChests,
    setDoors,
    setGameData,
    setCharacters,
    setEnemies,
    openAtackModal,
  } = props;

  const [repeater, setRepeater] = useState(0);
  const [action, setAction] = useState("menu");

  useEffect(() => {
    const setStateAfterRequest = (data) => {
      setEnemies(data.enemies);
      setCharacters(data.characters);
      setDoors(data.doors);
      setChests(data.chests);
      setGameData(data.gameData);
      setMinimaps(data.minimaps);
    };

    const callUpdateService = () => {
      const service = requestGameData(
        ReactSession.get("gameId"),
        gameData.numberOfActions
      );
      service.then((answer) => {
        if (answer.status === 200) {
          console.log(answer);
          setStateAfterRequest(answer.data);
        }
      });

      if (gameData.currentEnemyId > -1) {
        const enemy = enemies.find(
          (enemy) => enemy.id === gameData.currentEnemyId
        );
        console.log(gameData);

        openAtackModal({
          isOpen: true,
          atacker: enemy,
          defender: characters.find(
            (char) => char.characterType === gameData.atackedCharacter
          ),
          isPlayer: false,
        });
      }

      setTimeout(() => setRepeater((prevState) => prevState + 1), 1000);
    };

    callUpdateService();
  }, [setChests, setDoors, setMinimaps, setGameData, setCharacters, repeater]);

  // useEffect(() => {
  //   console.log(enemyAction, gameData.enemyOrder);
  //   if (
  //     characters.length > 0 &&
  //     enemies.length > 0 &&
  //     gameData.enemyOrder &&
  //     gameData.enemyOrder.length > 0 &&
  //     enemyAction
  //   ) {
  //     gameData.enemyOrder.forEach((enemyId) => {
  //       console.log(enemyId, enemyAction);
  //       const enemy = enemies.find((enemy) => enemy.id === parseInt(enemyId));
  //       const cellPlayers = playersOnRange({ characters, enemy });
  //       changeEnemyAction(false);
  //       if (cellPlayers.length > 0) {
  //         openAtackModal({
  //           isOpen: true,
  //           atacker: enemy,
  //           defender: cellPlayers[0],
  //           isPlayer: false,
  //         });
  //         return null;
  //       } else {
  //         console.log(enemy, "move");
  //         const response = moveEnemy();
  //         response.then((answer) => {
  //           if (answer.status === 200) changeEnemyAction(true);
  //         });
  //       }
  //     });
  //     endEnemyRound();
  //   }
  // }, [gameData.enemyOrder, enemies, characters]);

  const SubMenu = () => {
    if (gameData.open === false) return null;

    return (
      <div style={styles.asideBar}>
        <div style={styles.gameData}>
          <span style={styles.sideMenu.container}>
            <img
              src={Images.sideMenu.round}
              style={styles.sideMenu.left}
              alt="Round"
            />
            <img
              src={Images.numbers[gameData.round]}
              style={styles.sideMenu.right}
              alt={gameData.round}
            />
          </span>
          <span style={styles.sideMenu.container}>
            <img
              src={Images.sideMenu.actualPlayer}
              style={styles.sideMenu.left}
              alt="Actual player"
            />
            <img
              src={Images.sideMenu[gameData.roundOrder[0]]}
              style={styles.sideMenu.right}
              alt={gameData.roundOrder[0]}
            />
          </span>
          <span style={styles.sideMenu.container}>
            <img
              src={Images.sideMenu.generalActions}
              style={styles.sideMenu.left}
              alt="A????es gerais"
            />
            <img
              src={Images.numbers[gameData.generalActions]}
              style={styles.sideMenu.right}
              alt={gameData.generalActions}
            />
          </span>
          <span style={styles.sideMenu.container}>
            <img
              src={Images.sideMenu.movementActions}
              style={styles.sideMenu.left}
              alt="A????es de movimento"
            />
            <img
              src={Images.numbers[gameData.moveActions]}
              style={styles.sideMenu.right}
              alt={gameData.moveActions}
            />
          </span>
          <span style={styles.sideMenu.container}>
            <img
              src={Images.sideMenu.atackActions}
              style={styles.sideMenu.left}
              alt="A????es de ataque"
            />
            <img
              src={Images.numbers[gameData.atackActions]}
              style={styles.sideMenu.right}
              alt={gameData.atackActions}
            />
          </span>
          <span style={styles.sideMenu.container}>
            <img
              src={Images.sideMenu.sceneryActions}
              style={styles.sideMenu.left}
              alt="A????es de ataque"
            />
            <img
              src={Images.numbers[gameData.sceneryActions]}
              style={styles.sideMenu.right}
              alt={gameData.sceneryActions}
            />
          </span>
          <span style={styles.sideMenu.container}>
            <img
              src={Images.sideMenu.gameLevel}
              style={styles.sideMenu.left}
              alt="Level da fase"
            />
            <img
              src={Images.numbers[gameData.gameLevel]}
              style={styles.sideMenu.right}
              alt={gameData.gameLevel}
            />
          </span>
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
      <CharacterModal />
      <AtackModal />
      {SubMenu()}
      <Menu gameData={gameData} setMinimaps={setMinimaps} />
    </div>
  );
};

export default App;
