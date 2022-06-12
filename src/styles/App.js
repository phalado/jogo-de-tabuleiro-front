const AppStyles = {
  backgroundImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  window: {
    width: "100%",
    height: "100%",
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  viewContainer: {
    width: "50%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  chooseContainer: {
    width: "80%",
    height: "50%",
    display: "flex",
    alignItems: "center",
    alignContent: "space-around",
    justifyContent: "space-evenly",
    flexDirection: "column",
    zIndex: 1,
    color: "deepskyblue",
    background: "rgba(0,0,0,0.5)",
    borderRadius: "10px",
  },
  characterContainer: {
    height: "60%",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  characterImage: {
    height: "80%",
  },
  chooseButtonContainer: {
    width: "100%",
    height: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    zIndex: 1,
  },
  buttonContainer: {
    width: "20%",
    height: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    zIndex: 1,
  },
  newGameButton: {
    height: "10%",
  },
  title: {
    margin: 0,
  },
  asideBar: {
    width: "15%",
    height: "80%",
    marginLeft: "2%",
    marginRight: "2%",
    backgroundColor: "white",
    zIndex: 1,
  },
  gameData: {
    width: "90%",
    height: "50%",
    margin: "5%",
    textAlign: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    display: "flex",
  },
  sideMenu: {
    container: {
      height: "12%",
      display: "flex",
      justifyContent: "space-between",
      alignContent: 'center',
      marginBottom: "2%"
    },
    left: {
      width: "50%",
      height: "100%"
    },
    right: {
      width: "40%",
      height: "100%",
      alignSelf: 'center'
    }
  }
};

export default AppStyles;
