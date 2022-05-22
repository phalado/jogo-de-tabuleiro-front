const CellStyles = {
  container: {
    width: "33.333%",
    height: "33.333%",
    position: "relative",
  },
  wholeImage: {
    height: "100%",
    width: "100%",
    border: "none",
  },
  halfImage: {
    height: "50%",
    width: "50%",
    border: "none",
  },
  topWall: {
    width: "100%",
    height: "8%",
    position: "absolute",
    top: "-4%",
    left: 0,
    border: "none",
  },
  topRightWall: {
    width: "40%",
    height: "8%",
    position: "absolute",
    top: "-4%",
    right: 0,
    border: "none",
  },
  topLeftWall: {
    width: "40%",
    height: "8%",
    position: "absolute",
    top: "-4%",
    left: 0,
    border: "none",
    display: "flex",
  },
  bottomWall: {
    width: "100%",
    height: "8%",
    position: "absolute",
    bottom: "-4%",
    left: 0,
    border: "none",
    display: "flex",
  },
  bottomRightWall: {
    width: "100%",
    height: "8%",
    position: "absolute",
    bottom: "-4%",
    right: 0,
    border: "none",
    display: "flex",
  },
  bottomLeftWall: {
    width: "100%",
    height: "8%",
    position: "absolute",
    bottom: "-4%",
    left: 0,
    border: "none",
    display: "flex",
  },
  leftWall: {
    width: "8%",
    height: "100%",
    position: "absolute",
    left: "-4%",
    top: 0,
    border: "none",
    display: "flex",
  },
  rightWall: {
    width: "8%",
    height: "100%",
    position: "absolute",
    right: "-4%",
    top: 0,
    border: "none",
    display: "flex",
  },
  topDoor: {
    width: "20%",
    height: "50%",
    position: "absolute",
    top: "-25%",
    left: "40%",
    border: "none",
    display: "flex",
  },
  bottomDoor: {
    width: "20%",
    height: "50%",
    position: "absolute",
    bottom: "-25%",
    left: "40%",
    border: "none",
    display: "flex",
  },
  leftDoor: {
    width: "20%",
    height: "50%",
    position: "absolute",
    top: "25%",
    left: "-10%",
    border: "none",
    display: "flex",
  },
  rightDoor: {
    width: "20%",
    height: "50%",
    position: "absolute",
    top: "25%",
    right: "-10%",
    border: "none",
    display: "flex",
  },
  insideElements: {
    width: "80%",
    height: "80%",
    position: "absolute",
    top: "10%",
    left: "10%",
    border: "none",
    flexWrap: "wrap",
    flexDirection: "row",
    display: "flex",
  },
  soundIcon: {
    width: '10%',
    height: '10%',
    position: 'absolute',
    right: '-15px',
    top: '-15px',
  }
};

export default CellStyles;
