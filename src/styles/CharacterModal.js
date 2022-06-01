const CharacterModal = {
  content: {
    width: "50%",
    height: "50%",
    top: "25%",
    left: "25%",
    border: "solid",
    borderColor: "black",
    overflow: 'hidden'
  },
  title: {
    marginTop: 0,
    textAlign: "center",
  },
  bodyContainer: {
    display: "flex",
    height: "80%",
  },
  aside: {
    width: "40%",
  },
  image: {
    width: "90%",
    height: "80%",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  buttonContainer: {
    textAlign: "center",
  },
  hand: {
    flexDirection: 'row',
    height: '60%',
    display: 'flex',
    alignContent: 'space-evenly',
    width: '100%',
  },
  handItemConteiner: {
    width: '50%',
    height: '80%'
  },
  bodyItemContainer: {
    height: '30%',
    textAlign: 'center'
  },
  bagItemContainer: {
    height: '20%'
  },
  bagItem: {
    height: '100%'
  },
  characterContainer: {
    width: '30%'
  },
  diceContainer: {
    width: '40%',
    alignSelf: 'center',
    textAlign: 'center'
  },
  hitContainer: {
    position: 'absolute',
    backgroundColor: 'whitesmoke',
    color: 'green',
    fontStyle: 'italic',
    width: '50%',
    textAlign: 'center',
    display: 'none',
  },
  errContainer: {
    position: 'absolute',
    backgroundColor: 'whitesmoke',
    color: 'red',
    fontStyle: 'italic',
    width: '50%',
    textAlign: 'center',
    display: 'none',
  }
};

export default CharacterModal;
