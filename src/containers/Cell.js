import { connect } from "react-redux";

import Cell from "../components/Cell";
import { openModal, setChests } from "../actions";

const mapStateToProps = (state) => ({
  doors: state.doors,
  chests: state.chests,
  enemies: state.enemies,
  gameData: state.gameData,
  characters: state.characters,
});

const mapDispatchToProps = (dispatch) => ({
  setChests: (doors) => dispatch(setChests(doors)),
  openModal: data => dispatch(openModal(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
