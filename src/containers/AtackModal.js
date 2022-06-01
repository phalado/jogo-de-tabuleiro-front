import { connect } from "react-redux";

import AtackModal from "../components/modals/AtackModal";
import { closeAtackModal } from "../actions";

const mapStateToProps = (state) => ({
  characters: state.characters,
  enemies: state.enemies,
  atackModal: state.atackModal,
  gameData: state.gameData,
});

const mapDispatchToProps = (dispatch) => ({
  closeAtackModal: (data) => dispatch(closeAtackModal(data)),
  // changeActionsCount: (action) => dispatch(changeActionsCount(action)),
  // addSoundToCell: data => dispatch(addSoundToCell(data)),
  // setEnemiesOrder: (enemyOrder) => dispatch(setEnemiesOrder(enemyOrder)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AtackModal);
