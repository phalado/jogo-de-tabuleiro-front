const MapStyles = {
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    display: "flex",
    marginLeft: "2%",
  },
  smallContainer: {
    width: "80%",
    height: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    display: "flex",
  },
  minimap: {
    width: "33.333%",
    height: "50%",
    flexDirection: "row",
    flexWrap: "wrap",
    display: "flex",
  },
  button: {
    width: "90%",
    height: "10%",
    margin: "5%",
    border: "solid",
    borderColor: "black",
    backgroundColor: "grey",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10%",
    color: "white",
    fontSize: "15px",
    "&:hover": {
      backgroundColor: "#808080bf",
    },
  },
  moveButtonsContainer: {
    width: "100%",
    height: "40%",
    marginTop: "10%",
    marginBottom: "10%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  nsButton: {
    width: "80%",
    height: "15%",
    margin: "5%",
    border: "solid",
    borderColor: "black",
    backgroundColor: "grey",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10%",
  },
  ewButton: {
    width: "30%",
    height: "40%",
    margin: "5%",
    border: "solid",
    borderColor: "black",
    backgroundColor: "grey",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10%",
  },
  nsArrow: {
    width: "50%",
    height: "80%",
  },
  ewArrow: {
    width: "80%",
    height: "50%",
  },
  actionButtons: {
    height: "15%",
    backgroundColor: 'white',
    border: 'none',
    opacity: "100%"
  },
  sideMenuImage: {
    height: "100%"
  }
};

export default MapStyles;
