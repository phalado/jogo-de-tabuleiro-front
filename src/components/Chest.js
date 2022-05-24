import React from "react";

import Images from "../constants/Images";
import { openChest } from "../services/ApiServices";

import styles from "../styles/Chest";

const Chest = (props) => {
  const { color, chestState } = props;
  const openOrClose = chestState ? "close" : "open";

  if (!color) return null;

  return (
    <div style={styles.container}>
      <img
        src={Images.chest[color][openOrClose]}
        style={styles.chest}
        alt="Chest"
      />
    </div>
  );
};

export default Chest;
