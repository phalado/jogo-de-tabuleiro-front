import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

// import App from "./containers/App";
import Routing from "./containers/Routing";
import rootReducer from "./reducers";
import "./index.css";

import { ReactSession } from "react-client-session";

ReactSession.setStoreType("sessionStorage");

let initialState = {
  chests: [],
  doors: [],
  gameData: { round: 0, open: false },
  minimaps: [],
  characters: [],
  currentUser: {
    username: ReactSession.get("username"),
    email: ReactSession.get("email"),
    id: ReactSession.get("id"),
    expires_at: null,
    token: null,
  },
  render: ReactSession.get("render") || "login",
  characterModal: { isOpen: false },
  atackModal: { isOpen: false },
};

const store = createStore(
  rootReducer,
  initialState,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routing />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
