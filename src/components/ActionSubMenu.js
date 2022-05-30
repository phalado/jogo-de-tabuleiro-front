import React from "react";
import { ReactSession } from "react-client-session";

import {
  // enemyBestRoute,
  // movementDestiny,
  possibleMoves,
  // randomElement,
  // randomMovement,
  // topNoisyCells,
} from "../helpers/helpers";

// import {
//   enemiesOnRange,
//   enemyToAtack,
//   playersOnRange,
// } from "../helpers/atackHelpers";

import Images from "../constants/Images";

import styles from "../styles/Map";
import {
  moveCharacter,
  openChest,
  changePlayer,
} from "../services/ApiServices";

const ActionSubMenu = (props) => {
  const {
    minimaps,
    doors,
    gameData,
    chests,
    action,
    setAction,
    characters,
    setCharacters,
    setChests,
  } = props;

  if (gameData.currentUserId !== ReactSession.get("id")) return null;

  const currentPlayer = characters.find(
    (character) => character.userId === ReactSession.get("id")
  );
  console.log(currentPlayer, gameData);
  const minimap = minimaps.find(
    (minimap) => minimap.position === currentPlayer.minimap
  );

  // const changePlayer = (setMenu) => {
  //   // setEnemiesOrder(Object.keys(enemies));
  //   // setAction("enemy");
  //   if (gameData.roundOrder.length > 1) {
  //     changeCurrentPlayer();
  //     renewGameActions([4, 0, 0, 0], players);
  //     if (setMenu) setAction("menu");
  //   } else {
  //     setEnemiesOrder(Object.keys(enemies));
  //     setAction("enemy");
  //   }
  // };

  // const changeMovementCount = () => {
  //   if (gameData.moveActions > 0) changeActionsCount("moveActions");
  //   else changeActionsCount("generalActions");
  // };

  const movePin = (direction) => {
    if (gameData.moveActions + gameData.generalActions <= 0) return null;

    moveCharacter(currentPlayer.characterType, direction).then((answer) => {
      setCharacters(answer.data);
      // const user = answer.data.find(
      //   (character) => character.userId === ReactSession.get("id")
      // );
      // changeZoomedMap(user.minimap);
    });
    // // changeMovementCount();
    // currentPlayer.move({
    //   player: currentPlayer,
    //   minimap,
    //   cell,
    // });
    setAction("menu");
  };

  // const atackButton = () => {
  //   const enemiesOnRangeArray = enemiesOnRange({
  //     enemies,
  //     player: players[gameData.currentPlayer],
  //   });
  //   if (enemiesOnRangeArray.length > 0) {
  //     return (
  //       <button style={styles.button} onClick={() => setAction("atack")}>
  //         Ataque
  //       </button>
  //     );
  //   }

  //   return null;
  // };

  const returnButton = () => (
    <button style={styles.button} onClick={() => setAction("menu")}>
      Voltar
    </button>
  );

  // if (action === "atack") {
  //   const enemy = enemyToAtack({
  //     enemies,
  //     player: players[gameData.currentPlayer],
  //   });
  //   openAtackModal({
  //     isOpen: true,
  //     atacker: gameData.currentPlayer,
  //     defender: enemy.id,
  //     isPlayer: true,
  //   });
  //   setAction("menu");
  // }

  if (action === "change")
    return <div style={styles.moveButtonsContainer}>{returnButton()}</div>;

  // if (action === "enemy") {
  //   const { enemyOrder } = gameData;
  //   if (enemyOrder.length > 0) {
  //     const enemy = enemies[enemyOrder[0]];
  //     const playersToAtack = playersOnRange({ players, enemy });
  //     if (playersToAtack.length > 0) {
  //       openAtackModal({
  //         isOpen: true,
  //         atacker: enemy.id,
  //         defender: randomElement(playersToAtack).playerType,
  //         isPlayer: false,
  //       });
  //     } else {
  //       const maxNoise = topNoisyCells([].concat(...GameMode01.minimaps))[0]
  //         .noise;
  //       let movement = {};

  //       if (maxNoise === 0) {
  //         movement = randomMovement({
  //           cell: minimaps[0][enemy.cell],
  //           doors,
  //           minimapIndex: enemy.minimap,
  //           cellIndex: enemy.cell,
  //         });
  //       } else {
  //         movement = enemyBestRoute({
  //           minimapIndex: enemy.minimap,
  //           cellIndex: enemy.cell,
  //           cell: minimaps[0][enemy.cell],
  //           doors,
  //           minimaps: GameMode01["minimaps"],
  //           noisyCell: maxNoise,
  //         });
  //       }
  //       enemy.move({ enemy, minimap: movement.minimap, cell: movement.cell });
  //       enemyOrder.shift();
  //       setEnemiesOrder(enemyOrder);
  //     }
  //   } else {
  //     newRound();
  //     resetSounds();
  //     setAction("menu");
  //   }
  // }

  if (action === "menu") {
    const chest = chests.find(
      (chest) =>
        chest.minimap === currentPlayer.minimap &&
        chest.cell === currentPlayer.cell
    );

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
        {/* {atackButton()} */}
        {gameData.moveActions + gameData.generalActions <= 0 ? null : (
          <button style={styles.button} onClick={() => setAction("move")}>
            Mover
          </button>
        )}
        <button style={styles.button} onClick={() => setAction("change")}>
          Trocar
        </button>
        {/* <button
          style={styles.button}
          onClick={() => {
            if (
              window.confirm(
                "Defender jogadores na célular e finalizar jogada?"
              )
            ) {
              setDefender(gameData.currentPlayer);
              changePlayer(true);
            }
          }}
        >
          Defender
        </button> */}
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
    // }

    // return <div style={styles.moveButtonsContainer}>{returnButton()}</div>;
  }

  return null;
};

export default ActionSubMenu;
