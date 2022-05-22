const gameData = (state = {}, action) => {
  switch (action.type) {
    case "SET_GAME_DATA":
      return action.data;
    default:
      return state;
  }
};

export default gameData;

// enemyOrder: [],
// playerOrder: [],
// currentPlayer: null,
// roundOrder: [],
// gameLevel: 1,
// generalActions: 4,
// moveActions: 0,
// atackActions: 0,
// sceneryActions: 0,
// defender: null,
// round: 1,
