import { connect } from "react-redux";

import { closeModal } from "../actions";
import CharacterModal from "../components/modals/CharacterModal";

const mapStateToProps = (state) => ({
  characters: state.characters,
  enemies: state.enemies,
  characterModal: state.characterModal,
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: (data) => dispatch(closeModal(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterModal);
