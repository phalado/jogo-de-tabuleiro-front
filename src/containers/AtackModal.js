import { connect } from "react-redux";

import AtackModal from "../components/modals/AtackModal";
import { closeAtackModal, changeEnemyAction } from "../actions";

const mapStateToProps = (state) => ({
  atackModal: state.atackModal,
  gameData: state.gameData,
});

const mapDispatchToProps = (dispatch) => ({
  closeAtackModal: (data) => dispatch(closeAtackModal(data)),
  changeEnemyAction: (enemyAction) => dispatch(changeEnemyAction(enemyAction)),
  // changeActionsCount: (action) => dispatch(changeActionsCount(action)),
  // addSoundToCell: data => dispatch(addSoundToCell(data)),
  // setEnemiesOrder: (enemyOrder) => dispatch(setEnemiesOrder(enemyOrder)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AtackModal);
