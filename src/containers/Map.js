import { connect } from "react-redux";

import Map from "../components/Map";

const mapStateToProps = (state) => ({
  minimaps: state.minimaps,
});

export default connect(mapStateToProps, null)(Map);
