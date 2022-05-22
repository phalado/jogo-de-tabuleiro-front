import { connect } from "react-redux";

import Cell from "../components/Cell";
import { setDoors } from "../actions";

const mapStateToProps = (state) => ({
  chests: state.chests,
  doors: state.doors,
  gameData: state.gameData,
  zoomedMap: state.zoomedMap,
});

const mapDispatchToProps = (dispatch) => ({
  setDoors: (doors) => dispatch(setDoors(doors)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
