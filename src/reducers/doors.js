const doors = (state = {}, action) => {
  switch (action.type) {
    case "DOORS_INITIAL_STATE":
      return {};
    case "SET_DOORS":
      return action.doors;
    default:
      return state;
  }
};

export default doors;
