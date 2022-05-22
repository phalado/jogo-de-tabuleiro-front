const minimapsInitialState = () => ({
  type: "MINIMAPS_INITIAL_STATE",
});

const setMinimaps = (minimaps) => ({
  type: "SET_MINIMAPS",
  minimaps,
});

const chestsInitialState = () => ({
  type: "CHESTS_INITIAL_STATE",
});

const setChests = (chests) => ({
  type: "SET_CHESTS",
  chests,
});

const doorsInitialState = () => ({
  type: "DOORS_INITIAL_STATE",
});

const setDoors = (doors) => ({
  type: "SET_DOORS",
  doors,
});

const setGameData = (data) => ({
  type: "SET_GAME_DATA",
  data
});

// const openModal = (data) => ({
//   type: "OPEN_MODAL",
//   heroCharacter: data.heroCharacter,
//   character: data.character,
// });

// const closeModal = () => ({
//   type: "CLOSE_MODAL",
// });

// const openAtackModal = (data) => ({
//   type: "OPEN_ATACK_MODAL",
//   isOpen: data.isOpen,
//   atacker: data.atacker,
//   defender: data.defender,
//   isPlayer: data.isPlayer,
// });

// const closeAtackModal = () => ({
//   type: "CLOSE_ATACK_MODAL",
// });

export {
  minimapsInitialState,
  setMinimaps,
  chestsInitialState,
  setChests,
  doorsInitialState,
  setDoors,
  setGameData,
};
