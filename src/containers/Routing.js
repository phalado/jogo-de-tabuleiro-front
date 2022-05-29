import { connect } from "react-redux";
import { setCurrentUser, setRender, setGameData } from "../actions";

import Routing from "../components/Routing";

const mapStateToProps = (state) => ({
  render: state.render,
  currentUser: state.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (currentUser) => dispatch(setCurrentUser(currentUser)),
  setRender: (render) => dispatch(setRender(render)),
  setGameData: (gameData) => dispatch(setGameData(gameData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Routing);
