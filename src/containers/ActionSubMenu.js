import { connect } from "react-redux";
import { setCharacters, setChests } from "../actions";

import ActionSubMenu from "../components/ActionSubMenu";

const mapStateToProps = (state) => ({
  minimaps: state.minimaps,
  doors: state.doors,
  gameData: state.gameData,
  chests: state.chests,
  characters: state.characters,
});

const mapDispatchToProps = (dispatch) => ({
  setCharacters: (characters) => dispatch(setCharacters(characters)),
  setChests: (chests) => dispatch(setChests(chests)),

  // setDefender: (player) => dispatch(setDefender(player)),

  // openAtackModal: (data) => dispatch(openAtackModal(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActionSubMenu);
