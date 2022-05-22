const zoomedMap = (state = {}, action) => {
  switch (action.type) {
    case "ZOOMED_MAP_INITIAL_STATE":
      return 0;
    case "CHANGE_ZOOMED_MAP":
      console.log(action);
      return action.minimap;
    default:
      return state;
  }
};

export default zoomedMap;
