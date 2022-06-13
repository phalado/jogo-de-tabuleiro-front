import React, { useState } from "react";

import styles from "../styles/Map";

const ActionButton = props => {
  const { onClickAction, buttonImage, alt } = props;

  const [buttonStyles, setButtonStyles] = useState(styles.actionButtons)

  const changeOpacity = opacity => setButtonStyles({ ...buttonStyles, opacity })

  return (
    <button
      style={buttonStyles}
      onClick={() => onClickAction()}
      onMouseOver={() => changeOpacity("70%")}
      onMouseLeave={() => changeOpacity("100%")}
    >
      <img style={styles.sideMenuImage} src={buttonImage} alt={alt} />
    </button>
  )
}

export default ActionButton
