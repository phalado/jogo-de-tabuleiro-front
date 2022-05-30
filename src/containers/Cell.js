import { connect } from "react-redux";

import Cell from "../components/Cell";
import { setChests } from "../actions";

const mapStateToProps = (state) => ({
  doors: state.doors,
  chests: state.chests,
  gameData: state.gameData,
  characters: state.characters,
});

const mapDispatchToProps = (dispatch) => ({
  setChests: (doors) => dispatch(setChests(doors)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
