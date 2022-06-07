import React, { useEffect, useState } from "react";
import { ReactSession } from "react-client-session";

import { possibleMoves } from "../helpers/helpers";

import {
  enemiesOnRange,
  enemyToAtack,
  // playersOnRange,
} from "../helpers/atackHelpers";

import Images from "../constants/Images";

import styles from "../styles/Map";
import {
  moveCharacter,
  openChest,
  changePlayer,
  addDefenderToCell,
} from "../services/ApiServices";

const ActionSubMenu = (props) => {
  const {
    minimaps,
    doors,
    gameData,
    chests,
    action,
    enemies,
    setAction,
    characters,
    setCharacters,
    setChests,
    openAtackModal,
  } = props;

  if (gameData.currentUserId !== ReactSession.get("id")) return null;

  const [cellEnemies, setCellEnemies] = useState(enemies);
  const [currentPlayer, setCurrentPlayer] = useState({});
  const [minimap, setMinimap] = useState({});
  const [cell, setCell] = useState({});

  useEffect(() => {
    setCellEnemies(enemies);
    setCurrentPlayer(
      characters.find(
        (character) => character.userId === ReactSession.get("id")
      )
    );
    setMinimap(
      minimaps.find((minimap) => minimap.position === currentPlayer.minimap)
    );
    if (minimap && minimap.cells)
      setCell(
        minimap.cells.find((cell) => cell.position === currentPlayer.cell)
      );
  }, [enemies, characters, minimaps]);

  const movePin = (direction) => {
    if (gameData.moveActions + gameData.generalActions <= 0) return null;

    moveCharacter(currentPlayer.characterType, direction).then((answer) => {
      setCharacters(answer.data.characters);
    });
    setAction("menu");
  };

  const setDefender = () => {
    const cellId = cell.id;
    addDefenderToCell(cellId, currentPlayer.characterType);
  };

  const atackButton = () => {
    if (
      !currentPlayer ||
      cellEnemies.length === 0 ||
      gameData.atackActions + gameData.generalActions <= 0
    )
      return null;

    const enemiesOnRangeArray = enemiesOnRange({
      enemies: cellEnemies,
      currentPlayer,
    });
    if (enemiesOnRangeArray.length > 0) {
      return (
        <button style={styles.button} onClick={() => setAction("atack")}>
          Ataque
        </button>
      );
    }

    return null;
  };

  const returnButton = () => (
    <button style={styles.button} onClick={() => setAction("menu")}>
      Voltar
    </button>
  );

  if (action === "atack") {
    const enemy = enemyToAtack({ enemies: cellEnemies, currentPlayer });
    openAtackModal({
      isOpen: true,
      atacker: currentPlayer,
      defender: enemy,
      isPlayer: true,
    });
    setAction("menu");
  }

  if (action === "change")
    return <div style={styles.moveButtonsContainer}>{returnButton()}</div>;

  if (action === "menu") {
    const chest = chests.find(
      (chest) =>
        chest.minimap === currentPlayer.minimap &&
        chest.cell === currentPlayer.cell
    );

    const defenderButton = () => {
      console.log(cell);
      if (
        cell &&
        cell.defender !== null &&
        gameData.sceneryActions + gameData.generalActions <= 0
      )
        return null;

      return (
        <button
          style={styles.button}
          onClick={() => {
            if (
              window.confirm("Defender jogadores na célular e encerrar jogada?")
            )
              setDefender();
          }}
        >
          Defender
        </button>
      );
    };

    const openChestButton = () => {
      if (
        chest &&
        chest.closed &&
        gameData.sceneryActions + gameData.generalActions > 0
      ) {
        return (
          <button
            style={styles.button}
            onClick={() => {
              openChest(chest.name, false).then((answer) =>
                setChests(answer.data)
              );
            }}
          >
            Abrir baú
          </button>
        );
      }
    };

    return (
      <div style={styles.moveButtonsContainer}>
        {atackButton()}
        {gameData.moveActions + gameData.generalActions <= 0 ? null : (
          <button style={styles.button} onClick={() => setAction("move")}>
            Mover
          </button>
        )}
        <button style={styles.button} onClick={() => setAction("change")}>
          Trocar
        </button>
        {defenderButton()}
        <button
          style={styles.button}
          onClick={() => {
            if (window.confirm("Encerrar jogada?")) changePlayer();
          }}
        >
          Encerrar ação
        </button>
        {openChestButton()}
      </div>
    );
  }

  if (action === "move") {
    // if (gameData.generalActions + gameData.moveActions > 0) {
    const cell = minimap.cells.find(
      (cell) => cell.position === currentPlayer.cell
    );
    const moves = possibleMoves(
      minimap.position,
      cell,
      doors.filter(
        (door) =>
          (door.cell1.minimap === currentPlayer.minimap &&
            door.cell1.cell === cell.position) ||
          (door.cell2.minimap === currentPlayer.minimap &&
            door.cell2.cell === cell.position)
      )
    );

    return (
      <div style={styles.moveButtonsContainer}>
        <button
          style={styles.nsButton}
          disabled={!moves.includes("north")}
          onClick={() => movePin("north")}
        >
          <img
            src={
              moves.includes("north")
                ? Images.arrow.black.top
                : Images.arrow.grey.top
            }
            style={styles.nsArrow}
            alt="Top arrow"
          />
        </button>
        <button
          style={styles.ewButton}
          disabled={!moves.includes("west")}
          onClick={() => movePin("west")}
        >
          <img
            src={
              moves.includes("west")
                ? Images.arrow.black.left
                : Images.arrow.grey.left
            }
            style={styles.ewArrow}
            alt="Left arrow"
          />
        </button>
        <button
          style={styles.ewButton}
          disabled={!moves.includes("east")}
          onClick={() => movePin("east")}
        >
          <img
            src={
              moves.includes("east")
                ? Images.arrow.black.right
                : Images.arrow.grey.right
            }
            style={styles.ewArrow}
            alt="Right arrow"
          />
        </button>
        <button
          style={styles.nsButton}
          disabled={!moves.includes("south")}
          onClick={() => movePin("south")}
        >
          <img
            src={
              moves.includes("south")
                ? Images.arrow.black.bottom
                : Images.arrow.grey.bottom
            }
            style={styles.nsArrow}
            alt="Bottom arrow"
          />
        </button>
        {returnButton()}
      </div>
    );
  }

  return null;
};

export default ActionSubMenu;
