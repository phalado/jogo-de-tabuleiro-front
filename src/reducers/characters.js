const characters = (state = {}, action) => {
  switch (action.type) {
    case "CHARACTERS_INITIAL_STATE":
      return {};
    case "SET_CHARACTERS":
      return action.characters;
    default:
      return state;
  }
};

export default characters;
