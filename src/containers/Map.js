import { connect } from "react-redux";
import { setMinimaps } from "../actions";

import Map from "../components/Map";

const mapStateToProps = (state) => ({
  minimaps: state.minimaps,
  gameData: state.gameData,
});

const mapDispatchToProps = (dispatch) => ({
  setMinimaps: (minimaps) => dispatch(setMinimaps(minimaps)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
