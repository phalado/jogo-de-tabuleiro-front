import React from "react";

import Cell from "../containers/Cell";

import styles from "../styles/MiniMap";

const MiniMap = (props) => {
  const { minimapPosition, cells } = props;

  return (
    <div style={styles.container}>
      {cells
        .sort((a, b) => a.position - b.position)
        .map((cell) => {
          return (
            <Cell
              cell={cell}
              minimapPosition={minimapPosition}
              key={[cell, cell.position]}
            />
          );
        })}
    </div>
  );
};

export default MiniMap;
