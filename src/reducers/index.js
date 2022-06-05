import { combineReducers } from "redux";

import minimaps from "./minimaps";
import chests from "./chests";
import doors from "./doors";
import gameData from "./gameData";
import characters from "./characters";
import currentUser from "./currentUser";
import render from "./render";
import enemies from "./enemies";
import characterModal from "./characterModal";
import atackModal from "./atackModal";
import enemyAction from "./enemyAction";

const rootReducer = combineReducers({
  minimaps,
  chests,
  doors,
  gameData,
  characters,
  currentUser,
  render,
  enemies,
  characterModal,
  atackModal,
  enemyAction,
});

export default rootReducer;
