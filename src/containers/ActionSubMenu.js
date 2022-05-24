import { connect } from "react-redux";
import { changeZoomedMap, setCharacters, setChests } from "../actions";

import ActionSubMenu from "../components/ActionSubMenu";

const mapStateToProps = (state) => ({
  minimaps: state.minimaps,
  doors: state.doors,
  zoomedMap: state.zoomedMap,
  gameData: state.gameData,
  chests: state.chests,
  characters: state.characters,
});

const mapDispatchToProps = (dispatch) => ({
  changeZoomedMap: (minimap) => dispatch(changeZoomedMap(minimap)),
  setCharacters: (characters) => dispatch(setCharacters(characters)),
  setChests: (chests) => dispatch(setChests(chests)),
  // changeChestState: (chestState) => dispatch(changeChestState(chestState)),
  // addSoundToCell: data => dispatch(addSoundToCell(data)),

  // setDefender: (player) => dispatch(setDefender(player)),

  // openAtackModal: (data) => dispatch(openAtackModal(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActionSubMenu);
