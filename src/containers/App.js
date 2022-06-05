import { connect } from "react-redux";
import {
  setChests,
  setDoors,
  setGameData,
  setMinimaps,
  setCharacters,
  setEnemies,
  openAtackModal,
} from "../actions";

import App from "../components/App";

const mapStateToProps = (state) => ({
  characters: state.characters,
  enemies: state.enemies,
  gameData: state.gameData,
});

const mapDispatchToProps = (dispatch) => ({
  setMinimaps: (minimaps) => dispatch(setMinimaps(minimaps)),
  setChests: (chests) => dispatch(setChests(chests)),
  setDoors: (doors) => dispatch(setDoors(doors)),
  setGameData: (gameData) => dispatch(setGameData(gameData)),
  setCharacters: (characters) => dispatch(setCharacters(characters)),
  setEnemies: (enemies) => dispatch(setEnemies(enemies)),
  openAtackModal: (data) => dispatch(openAtackModal(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
