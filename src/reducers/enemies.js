const enemies = (state = {}, action) => {
  switch (action.type) {
    case "SET_ENEMIES":
      return action.enemies;
    default:
      return state;
  }
};

export default enemies;
