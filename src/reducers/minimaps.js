const minimaps = (state = {}, action) => {
  switch (action.type) {
    case "MINIMAPS_INITIAL_STATE":
      return [];
    case "SET_MINIMAPS":
      return action.minimaps;
    default:
      return state;
  }
};

export default minimaps;
