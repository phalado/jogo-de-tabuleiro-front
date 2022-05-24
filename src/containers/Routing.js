import { connect } from "react-redux";
import { setCurrentUser } from "../actions";

import Routing from "../components/Routing";

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (currentUser) => dispatch(setCurrentUser(currentUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Routing);
