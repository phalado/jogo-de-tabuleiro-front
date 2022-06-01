const atackModal = (state = {}, action) => {
  switch (action.type) {
    case "OPEN_ATACK_MODAL":
      return {
        isOpen: true,
        atacker: action.atacker,
        defender: action.defender,
        isPlayer: action.isPlayer
      }
    case "CLOSE_ATACK_MODAL":
      return {
        isOpen: false,
        atacker: false,
        defender: false,
        isPlayer: false
      }
    default:
      return state;
  }
};

export default atackModal;
