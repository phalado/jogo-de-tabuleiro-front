import { connect } from "react-redux";

import Cell from "../components/Cell";
import { setChests, setDoors } from "../actions";

const mapStateToProps = (state) => ({
  chests: state.chests,
  doors: state.doors,
  gameData: state.gameData,
  zoomedMap: state.zoomedMap,
  characters: state.characters,
});

const mapDispatchToProps = (dispatch) => ({
  setDoors: (doors) => dispatch(setDoors(doors)),
  setChests: (doors) => dispatch(setChests(doors)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
