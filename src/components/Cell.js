import React from "react";
import { ReactSession } from "react-client-session";

import Chest from "./Chest";
import Images from "../constants/Images";
import chestStyles from "../styles/Chest";

import styles from "../styles/Cell";
import wall from "../helpers/cellHelpers";
import { openDoor } from "../services/ApiServices";
import { countEnemies } from "../helpers/helpers";

const Cell = (props) => {
  const {
    cell,
    minimapPosition,
    doors,
    chests,
    gameData,
    characters,
    enemies,
    setChests,
  } = props;

  const { north, south, east, west, inside, noise, enemyPortal } = cell;
  const floor = inside ? Images.floorWood : Images.floorRocks;

  const currentPlayer = characters.find(
    (character) => character.userId === ReactSession.get("id")
  );

  const canOpenDoor = (door) => {
    return (
      door.closed &&
      gameData.generalActions + gameData.sceneryActions > 0 &&
      gameData.currentUserId === ReactSession.get("id") &&
      (currentPlayer.cell === door.cell1["cell"] ||
        currentPlayer.cell === door.cell2["cell"])
    );
  };

  const changeThisDoorState = (door) => {
    if (canOpenDoor(door)) openDoor(door.name, false);
    return null;
  };

  const soundIcon = () => {
    if (noise > 0) {
      return (
        <div style={styles.soundIcon} title={noise}>
          <img src={Images.soundIcon} style={chestStyles.pin} alt={noise} />
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
    (char) => char.minimap === minimapPosition && char.cell === cell.position
  );

  const cellEnemies = countEnemies(
    enemies.filter(
      (enemy) =>
        enemy.minimap === minimapPosition && enemy.cell === cell.position
    )
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
              key={[character.characterType, cell.position]}
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
        {Object.entries(cellEnemies).map(([key, value]) => {
          return (
            <div
              style={chestStyles.container}
              title={value}
              key={[key, value, cell.position]}
              // onClick={() =>
              //   openModal({
              //     heroCharacter: false,
              //     character: value.enemyType,
              //   })
              // }
            >
              <img src={Images.enemy[key]} style={chestStyles.pin} alt={key} />
            </div>
          );
        })}
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
