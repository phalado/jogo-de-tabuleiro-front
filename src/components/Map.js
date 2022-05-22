import React, { useState } from "react";

import MiniMap from "./MiniMap";
// import ActionSubMenu from "../containers/ActionSubMenu";

import styles from "../styles/Map";

const Map = (props) => {
  const { minimaps, setMinimaps, gameData } = props;

  // const [action, setAction] = useState("menu");

  // const resetSounds = () => {
  //   const newMinimaps = [...GameMode01.minimaps];
  //   newMinimaps.forEach((minimap) =>
  //     minimap.forEach((cell) => (cell.noise = 0))
  //   );

  //   setMinimaps(minimaps);
  // };

  // if (Object.keys(minimaps).length === 0) return null;

  // if (minimaps.length === 1) {
  //   return (
  //     <div style={styles.container}>
  //       <div style={styles.smallContainer}>
  //         <MiniMap map={minimaps[0]} minimapIndex={zoomedMap} />
  //       </div>
  //       <div style={styles.asideBar}>
  //         <div style={styles.gameData}>
  //           <span>Round: {gameData.round}</span>
  //           <span>Jogador atual: {gameData.currentPlayer}</span>
  //           <span>Açoes gerais: {gameData.generalActions}</span>
  //           <span>Ações de movimento: {gameData.moveActions}</span>
  //           <span>Açoes de ataque: {gameData.atackActions}</span>
  //           <span>Açoes de cenário: {gameData.sceneryActions}</span>
  //           <span>Level da fase: {gameData.gameLevel}</span>
  //         </div>
  //         <ActionSubMenu
  //           action={action}
  //           setAction={setAction}
  //           resetSounds={() => resetSounds()}
  //         />
  //         <button
  //           style={styles.button}
  //           onClick={() => {
  //             setMinimaps(GameMode01.minimaps);
  //             changeZoomedMap(-1);
  //           }}
  //         >
  //           Voltar ao Mapa
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }
  if (minimaps === []) return null;
  else {
    return (
      <div style={styles.container}>
        {minimaps.map((minimap) => {
          return (
            <div
              style={styles.minimap}
              // onClick={() => {
              //   changeZoomedMap(index);
              //   changeMinimap(minimap);
              // }}
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
    );
  }
};

export default Map;
