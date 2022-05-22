import { connect } from "react-redux";
import { setChests, setDoors, setGameData, setMinimaps } from "../actions";

import App from "../components/App";

const mapDispatchToProps = (dispatch) => ({
  setMinimaps: (minimaps) => dispatch(setMinimaps(minimaps)),
  setChests: (chests) => dispatch(setChests(chests)),
  setDoors: (doors) => dispatch(setDoors(doors)),
  setGameData: (gameData) => dispatch(setGameData(gameData)),
});

export default connect(null, mapDispatchToProps)(App);
