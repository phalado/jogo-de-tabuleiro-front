import React from "react";

import Images from "../constants/Images";
import { openChest } from "../services/ApiServices";

import styles from "../styles/Chest";

const Chest = (props) => {
  const { name, color, chestState, setChests } = props;
  const openOrClose = chestState ? "close" : "open";

  const changeChestState = (name) => {
    console.log(chestState);
    if (chestState) {
      openChest(name, false).then((answer) => setChests(answer.data));
    } else return null;
  };

  if (!color) return null;

  return (
    <div style={styles.container}>
      <img
        src={Images.chest[color][openOrClose]}
        style={styles.chest}
        alt="Chest"
        onClick={() => changeChestState(name, false)}
      />
    </div>
  );
};

export default Chest;
