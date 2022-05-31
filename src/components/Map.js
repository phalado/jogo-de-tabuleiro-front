import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import MiniMap from "./MiniMap";

import styles from "../styles/Map";

const Map = (props) => {
  const { minimaps } = props;

  if (minimaps.length === 0) return null;

  return (
    <TransformWrapper>
      <TransformComponent>
        <div style={styles.container}>
          {minimaps
            .sort((a, b) => a.position - b.position)
            .map((minimap) => {
              return (
                <div style={styles.minimap} key={minimap.position}>
                  <MiniMap
                    minimapPosition={minimap.position}
                    cells={minimap.cells}
                    key={minimap}
                  />
                </div>
              );
            })}
        </div>
      </TransformComponent>
    </TransformWrapper>
  );
};

export default Map;
