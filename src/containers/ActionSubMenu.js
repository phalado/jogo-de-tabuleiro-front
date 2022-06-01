import { connect } from "react-redux";
import { openAtackModal, setCharacters, setChests } from "../actions";

import ActionSubMenu from "../components/ActionSubMenu";

const mapStateToProps = (state) => ({
  minimaps: state.minimaps,
  doors: state.doors,
  gameData: state.gameData,
  chests: state.chests,
  characters: state.characters,
  enemies: state.enemies,
});

const mapDispatchToProps = (dispatch) => ({
  setCharacters: (characters) => dispatch(setCharacters(characters)),
  setChests: (chests) => dispatch(setChests(chests)),
  openAtackModal: (data) => dispatch(openAtackModal(data)),

  // setDefender: (player) => dispatch(setDefender(player)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActionSubMenu);
