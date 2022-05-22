const chests = (state = {}, action) => {
  switch (action.type) {
    case "CHESTS_INITIAL_STATE":
      return {};
    case "SET_CHESTS":
      
      return action.chests;
    default:
      return state;
  }
};

export default chests;
