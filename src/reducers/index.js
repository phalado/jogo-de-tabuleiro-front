import { combineReducers } from "redux";

import minimaps from "./minimaps";
import chests from "./chests";
import doors from "./doors";
import gameData from "./gameData";

const rootReducer = combineReducers({
  minimaps,
  chests,
  doors,
  gameData,
});

export default rootReducer;
