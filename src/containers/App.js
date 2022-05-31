import { connect } from "react-redux";
import {
  setChests,
  setDoors,
  setGameData,
  setMinimaps,
  setCharacters,
  setEnemies,
} from "../actions";

import App from "../components/App";

const mapStateToProps = (state) => ({
  gameData: state.gameData,
});

const mapDispatchToProps = (dispatch) => ({
  setMinimaps: (minimaps) => dispatch(setMinimaps(minimaps)),
  setChests: (chests) => dispatch(setChests(chests)),
  setDoors: (doors) => dispatch(setDoors(doors)),
  setGameData: (gameData) => dispatch(setGameData(gameData)),
  setCharacters: (characters) => dispatch(setCharacters(characters)),
  setEnemies: (enemies) => dispatch(setEnemies(enemies)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
