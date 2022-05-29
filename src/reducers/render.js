const render = (state = {}, action) => {
  switch (action.type) {
    case "SET_RENDER":
      return action.render;
    default:
      return state;
  }
};

export default render;
