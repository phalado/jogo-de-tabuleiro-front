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

const charactersInitialState = () => ({
  type: "CHARACTERS_INITIAL_STATE",
});

const setCharacters = (characters) => ({
  type: "SET_CHARACTERS",
  characters,
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
  data,
});

const setCurrentUser = (currentUser) => ({
  type: "SET_CURRENT_USER",
  currentUser,
});

const setRender = (render) => ({
  type: "SET_RENDER",
  render,
});

const setEnemies = (enemies) => ({
  type: "SET_ENEMIES",
  enemies,
});

const openModal = (data) => ({
  type: "OPEN_MODAL",
  heroCharacter: data.heroCharacter,
  character: data.character,
});

const closeModal = () => ({
  type: "CLOSE_MODAL",
});

const openAtackModal = (data) => ({
  type: "OPEN_ATACK_MODAL",
  isOpen: data.isOpen,
  atacker: data.atacker,
  defender: data.defender,
  isPlayer: data.isPlayer,
});

const closeAtackModal = () => ({
  type: "CLOSE_ATACK_MODAL",
});

const changeEnemyAction = (enemyAction) => ({
  type: "CHANGE_ENEMY_ACTION",
  enemyAction,
});

export {
  minimapsInitialState,
  setMinimaps,
  chestsInitialState,
  setChests,
  doorsInitialState,
  setDoors,
  setGameData,
  charactersInitialState,
  setCharacters,
  setCurrentUser,
  setRender,
  setEnemies,
  openModal,
  closeModal,
  openAtackModal,
  closeAtackModal,
  changeEnemyAction,
};
