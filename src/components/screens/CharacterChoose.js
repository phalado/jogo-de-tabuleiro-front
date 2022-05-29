import React, { useEffect, useState } from "react";
import { ReactSession } from "react-client-session";

import Images from "../../constants/Images";
import { gamesCharacter } from "../../services/ApiServices";
import styles from "../../styles/App";

const CharacterChoose = (props) => {
  const { createPlayer, setRenderState, startGame } = props;

  const [characters, setCharacters] = useState({});
  const [repeater, setRepeater] = useState(0);
  const [serverPlayer, setServerPlayer] = useState(false);

  const gameId = ReactSession.get("gameId");

  useEffect(() => {
    const getCharactersData = () => {
      const service = gamesCharacter(gameId);
      service.then((answer) => {
        if (answer.data.round > 0) setRenderState("game");
        else {
          setCharacters(answer.data.characters);
          setServerPlayer(answer.data.serverPlayer);
        }
      });
    };

    getCharactersData();
    setTimeout(() => setRepeater((prevState) => prevState + 1), 1000);
  }, [gameId, repeater]);

  return (
    <div style={styles.window}>
      <img
        src={Images.background}
        style={styles.backgroundImage}
        alt="Background random img"
      />
      <div style={styles.chooseContainer}>
        <h1 style={styles.title}>Escolha seu personagem</h1>
        <div style={styles.chooseButtonContainer}>
          {Object.entries(characters).map(([type, object]) => (
            <div style={styles.characterContainer} key={[type, object]}>
              <img
                src={Images.player[type]}
                style={styles.characterImage}
                alt={type}
              />
              {object.player === "open" ? (
                <button
                  style={styles.newGameButton}
                  onClick={() => createPlayer(gameId, type)}
                >
                  {object.name}
                </button>
              ) : (
                <p>{object.player}</p>
              )}
            </div>
          ))}
        </div>
        {serverPlayer ? (
          <button
            style={styles.newGameButton}
            onClick={() => startGame(gameId)}
          >
            Começar jogo
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default CharacterChoose;
