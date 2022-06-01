const characterModal = (state = {}, action) => {
  switch (action.type) {
    case "CLOSE_MODAL":
      return {
        isOpen: false,
        heroCharacter: true,
        character: "",
      };
    case "OPEN_MODAL":
      return {
        isOpen: true,
        heroCharacter: action.heroCharacter,
        character: action.character,
      };
    default:
      return state;
  }
};

export default characterModal;
