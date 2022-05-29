import React, { useState } from "react";
// import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import MiniMap from "./MiniMap";
import ActionSubMenu from "../containers/ActionSubMenu";

import styles from "../styles/Map";

const Map = (props) => {
  const { minimaps, gameData, zoomedMap, changeZoomedMap } = props;

  const [action, setAction] = useState("menu");

  // const resetSounds = () => {
  //   const newMinimaps = [...GameMode01.minimaps];
  //   newMinimaps.forEach((minimap) =>
  //     minimap.forEach((cell) => (cell.noise = 0))
  //   );

  //   setMinimaps(minimaps);
  // };

  if (minimaps === []) return null;

  if (zoomedMap > -1) {
    const minimap = minimaps.find((minimap) => minimap.position === zoomedMap);

    return (
      <div style={styles.container}>
        <div style={styles.smallContainer}>
          <MiniMap minimapPosition={zoomedMap} cells={minimap.cells} />
        </div>
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
          <button style={styles.button} onClick={() => changeZoomedMap(-1)}>
            Voltar ao Mapa
          </button>
        </div>
      </div>
    );
  }

  return (
    // <TransformWrapper>
    // <TransformComponent>
    <div style={styles.container}>
      {minimaps
        .sort((a, b) => a.position - b.position)
        .map((minimap) => {
          return (
            <div
              style={styles.minimap}
              onClick={() => changeZoomedMap(minimap.position)}
              key={minimap.position}
            >
              <MiniMap
                minimapPosition={minimap.position}
                cells={minimap.cells}
              />
            </div>
          );
        })}
    </div>
    //   </TransformComponent>
    // </TransformWrapper>
  );
};

export default Map;
