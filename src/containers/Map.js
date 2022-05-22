import { connect } from "react-redux";
import { changeZoomedMap, setMinimaps } from "../actions";

import Map from "../components/Map";

const mapStateToProps = (state) => ({
  minimaps: state.minimaps,
  gameData: state.gameData,
  zoomedMap: state.zoomedMap,
});

const mapDispatchToProps = (dispatch) => ({
  setMinimaps: (minimaps) => dispatch(setMinimaps(minimaps)),
  changeZoomedMap: (minimap) => dispatch(changeZoomedMap(minimap)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
