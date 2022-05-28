import React, { useEffect, useState } from "react";

import Map from "../containers/Map";
import Menu from "./Menu";

import Images from "../constants/Images";
import {
  createNewGame,
  requestGameData,
  createCharacter,
} from "../services/ApiServices";
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
      const service = requestGameData();
      service.then((answer) => setStateAfterRequest(answer.data));
    };

    callUpdateService();

    //   closeModal();
    // const interval = setInterval(() => callUpdateService, 1000);
    setTimeout(() => setRepeater((prevState) => prevState + 1), 2000);
  }, [setChests, setDoors, setMinimaps, setGameData, setCharacters, repeater]);

  const createGame = () => {
    const service = createNewGame("01");
    service.then((answer) => setGameData(answer.data.gameData));
  };

  const createPlayer = (type) => {
    const service = createCharacter(type);
    service.then((answer) => setGameData(answer.data.gameData));
  };

  const charactersArray = [
    ["archer", "Arqueiro"],
    ["mage", "Mago"],
    ["human", "Humano"],
    ["elf", "Elfo"],
    ["thief", "Ladrão"],
    ["dwarf", "Anão"],
  ];

  if (gameData.round === 0) {
    if (!gameData.open) {
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
            <button style={styles.newGameButton}>Juntar-se a um amigo</button>
          </div>
        </div>
      );
    }

    return (
      <div style={styles.window}>
        <img
          src={Images.background}
          style={styles.backgroundImage}
          alt="Background random img"
        />
        <div style={styles.chooseContainer}>
          <h1>Escolha seu personagem</h1>
          <div style={styles.chooseButtonContainer}>
            {charactersArray.map(([type, name]) => (
              <div style={styles.characterContainer}>
                <img
                  src={Images.player[type]}
                  style={styles.characterImage}
                  alt={type}
                />
                <button
                  style={styles.newGameButton}
                  onClick={() => createPlayer(type)}
                >
                  {name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

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
