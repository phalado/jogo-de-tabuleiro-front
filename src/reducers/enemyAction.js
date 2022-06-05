const enemyAction = (state = {}, action) => {
  switch (action.type) {
    case "CHANGE_ENEMY_ACTION":
      return action.enemyAction;
    default:
      return state;
  }
};

export default enemyAction;
