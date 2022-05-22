import { connect } from "react-redux";

import Cell from "../components/Cell";
// import {
//   addSoundToCell,
//   changeActionsCount,
//   changeDoorState,
//   openModal,
// } from "../actions";

const mapStateToProps = (state) => ({
  chests: state.chests,
  doors: state.doors,
  gameData: state.gameData,
});

// const mapDispatchToProps = (dispatch) => ({
//   changeDoorState: (door) => dispatch(changeDoorState(door)),
//   openModal: (data) => dispatch(openModal(data)),
//   changeActionsCount: (action) => dispatch(changeActionsCount(action)),
//   addSoundToCell: (data) => dispatch(addSoundToCell(data)),
// });

export default connect(mapStateToProps, null)(Cell);
