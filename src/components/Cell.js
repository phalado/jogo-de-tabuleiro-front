import React from "react";

// import Chest from "./Chest";
import Images from "../constants/Images";
import styles from "../styles/Cell";
import chestStyles from "../styles/Chest";

import wall from "../helpers/cellHelpers";

const Cell = (props) => {
  const { cell, minimapPosition, doors } = props;

  const { north, south, east, west, inside, noise, enemyPortal } = cell;
  const floor = inside ? Images.floorWood : Images.floorRocks;

  // const canOpenDoor = (door) => {
  //   return (
  //     zoomedMap > -1 &&
  //     players[gameData.currentPlayer].minimap === minimapIndex &&
  //     players[gameData.currentPlayer].cell === cellIndex &&
  //     doors[door].closed &&
  //     gameData.generalActions + gameData.sceneryActions > 0
  //   );
  // };

  const changeThisDoorState = (door) => {
    //   if (canOpenDoor(door)) {
    //     changeDoorState({ door, newState: false });
    //     addSoundToCell({
    //       minimap: players[gameData.currentPlayer].minimap,
    //       cell: players[gameData.currentPlayer].cell,
    //     });

    //     if (gameData.sceneryActions > 0) changeActionsCount("sceneryActions");
    //     else changeActionsCount("generalActions");
    //   }
    return null;
  };

  const soundIcon = () => {
    if (noise > 0) {
      return (
        <div style={styles.soundIcon}>
          <img
            src={Images.soundIcon}
            style={chestStyles.pin}
            alt={noise}
            title={noise}
          />
        </div>
      );
    }

    return null;
  };

  const enemyPortalImage = () => {
    if (enemyPortal) {
      return (
        <div style={styles.enemyPortal}>
          <img
            src={Images.enemyPortal}
            style={chestStyles.enemyPortal}
            alt={"Enemy portal"}
          />
        </div>
      );
    }

    return null;
  };

  const insideElements = () => {
    return (
      <div style={styles.insideElements}>
        {/* {!chest ? null : (
          <Chest
            color={chests[chest].color}
            chestState={chests[chest].closed}
          />
        )} */}
        {/* {Object.entries(players).map(([key, value]) => {
          if (value.minimap === minimapIndex && value.cell === cellIndex) {
            return (
              <div
                style={chestStyles.container}
                key={[key, value]}
                onClick={() =>
                  openModal({ heroCharacter: true, character: key })
                }
              >
                <img
                  src={Images.player[key]}
                  style={chestStyles.pin}
                  alt="Pin"
                />
              </div>
            );
          }

          return null;
        })} */}
        {/* {Object.entries(enemies).map(([key, value]) => {
          if (value.minimap === minimapIndex && value.cell === cellIndex) {
            return (
              <div
                style={chestStyles.container}
                key={[key, value]}
                onClick={() =>
                  openModal({
                    heroCharacter: false,
                    character: value.enemyType,
                  })
                }
              >
                <img
                  src={Images.enemy[value.enemyType]}
                  style={chestStyles.pin}
                  alt={value.enemyType}
                />
              </div>
            );
          }

          return null;
        })} */}
        {soundIcon()}
        {enemyPortalImage()}
      </div>
    );
  };

  console.log(minimapPosition, cell);
  return (
    <div style={styles.container}>
      <img src={floor} style={styles.wholeImage} alt="Floor" />
      {wall({ direction: "north", wall: north, doors, changeThisDoorState })}
      {wall({ direction: "south", wall: south, doors, changeThisDoorState })}
      {wall({ direction: "east", wall: east, doors, changeThisDoorState })}
      {wall({ direction: "west", wall: west, doors, changeThisDoorState })}
      {insideElements()}
    </div>
  );
};

export default Cell;
