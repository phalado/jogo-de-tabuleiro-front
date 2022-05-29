import React from "react";
import { ReactSession } from "react-client-session";

import Chest from "./Chest";
import Images from "../constants/Images";
import styles from "../styles/Cell";
import chestStyles from "../styles/Chest";

import wall from "../helpers/cellHelpers";
import { openDoor } from "../services/ApiServices";

const Cell = (props) => {
  const {
    cell,
    minimapPosition,
    doors,
    chests,
    gameData,
    zoomedMap,
    characters,
    setChests,
  } = props;

  const { north, south, east, west, inside, noise, enemyPortal } = cell;
  const floor = inside ? Images.floorWood : Images.floorRocks;

  const currentPlayer = characters.find(
    (character) => character.userId === ReactSession.get("id")
  );

  const canOpenDoor = (door) => {
    return (
      zoomedMap > -1 &&
      currentPlayer.minimap === zoomedMap &&
      door.closed &&
      gameData.generalActions + gameData.sceneryActions > 0 &&
      (currentPlayer.cell === door.cell1["cell"] ||
        currentPlayer.cell === door.cell2["cell"])
    );
  };

  const changeThisDoorState = (door) => {
    if (canOpenDoor(door)) {
      openDoor(door.name, false);
      // addSoundToCell({
      //   minimap: players[gameData.currentPlayer].minimap,
      //   cell: players[gameData.currentPlayer].cell,
      // });
      // if (gameData.sceneryActions > 0) changeActionsCount("sceneryActions");
      // else changeActionsCount("generalActions");
    }
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

  const chest = chests.find(
    (chest) => chest.minimap === minimapPosition && chest.cell === cell.position
  );

  const cellCharacters = characters.filter(
    (chest) => chest.minimap === minimapPosition && chest.cell === cell.position
  );

  const insideElements = () => {
    return (
      <div style={styles.insideElements}>
        {!chest ? null : (
          <Chest
            name={chest.name}
            color={chest.color}
            chestState={chest.closed}
            setChests={setChests}
          />
        )}
        {cellCharacters.map((character) => {
          return (
            <div
              style={chestStyles.container}
              key={character}
              // onClick={() => openModal({ heroCharacter: true, character: key })}
            >
              <img
                src={Images.player[character.characterType]}
                style={chestStyles.pin}
                alt={character.characterType}
              />
            </div>
          );
        })}
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
