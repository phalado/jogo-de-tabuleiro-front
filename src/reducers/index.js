import { combineReducers } from "redux";

import minimaps from "./minimaps";
import chests from "./chests";
import doors from "./doors";
import gameData from "./gameData";
import zoomedMap from "./zoomedMap";
import characters from "./characters";
import currentUser from "./currentUser";
import render from "./render";

const rootReducer = combineReducers({
  minimaps,
  chests,
  doors,
  gameData,
  zoomedMap,
  characters,
  currentUser,
  render,
});

export default rootReducer;
