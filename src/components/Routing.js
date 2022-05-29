import React, { useEffect } from "react";
import { ReactSession } from "react-client-session";

import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Start from "./screens/Start";
import App from "../containers/App";
import CharacterChoose from "./screens/CharacterChoose";
import JoinGame from "./screens/JoinGame";

import {
  createNewGame,
  createNewUser,
  loginUser,
  requestUserData,
  createCharacter,
  joinCreatedGame,
  requestGameData,
  gameStart,
} from "../services/ApiServices";

const Routing = (props) => {
  const { render, currentUser, setRender, setCurrentUser, setGameData } = props;

  ReactSession.setStoreType("sessionStorage");

  const setSession = (user) => {
    const { id, username, email } = user;

    ReactSession.set("id", id);
    ReactSession.set("username", username);
    ReactSession.set("email", email);
    ReactSession.set("gotData", true);
  };

  useEffect(() => {
    const setStateAfterRequest = (data) => {
      setCurrentUser(data);
      setSession(data);
    };

    const callUpdateService = () => {
      if (ReactSession.get("gameId")) {
        const service = requestGameData(ReactSession.get("gameId"));
        service.then((answer) => {
          setGameData(answer.data.gameData);
          ReactSession.set("gameId", answer.data.gameData.gameId);
        });
      }
    };

    callUpdateService();

    if (!ReactSession.get("gotData")) {
      const current_user_id = ReactSession.get("id");

      if (current_user_id !== undefined && current_user_id !== 0) {
        const service = requestUserData(current_user_id);
        service.then((answer) => setStateAfterRequest(answer.data));
      }
    }
  }, [setCurrentUser, currentUser]);

  const setRenderState = (state) => {
    ReactSession.set("render", state);
    setRender(state);
  };

  const changeToSignUp = () => {
    setCurrentUser({ email: null, id: 0, expires_at: null, token: null });
    ReactSession.set("id", 0);
    setRenderState("signup");
  };

  const changeToLogin = () => {
    setCurrentUser({ email: null, id: null, expires_at: null, token: null });
    ReactSession.remove("id");
    setRenderState("login");
  };

  const login = (email, password) => {
    loginUser(email, password).then((answer) => {
      if (answer.status === 204) window.alert("Usuário não encontrado");
      else {
        setCurrentUser(answer.data);
        setSession(answer.data);
        setRenderState("start");
      }
    });
  };

  const signup = (email, password, username) => {
    createNewUser(email, password, username).then((answer) => {
      setCurrentUser(answer.data);
      setSession(answer.data);
    });
    setRenderState("start");
  };

  const createGame = () => {
    const service = createNewGame("01");
    service.then((answer) => {
      setGameData(answer.data.gameData);
      ReactSession.set("gameId", answer.data.gameData.gameId);
    });
    setRenderState("char");
  };

  const joinGame = (gameId) => {
    const service = joinCreatedGame(gameId);
    service.then((answer) => {
      if (answer.status === 404) window.alert("ID de jogo inválida");
      else {
        setGameData(answer.data.gameData);
        ReactSession.set("gameId", gameId);
        setRenderState("char");
      }
    });
  };

  const setJoin = (state) => setRenderState(state);

  const createPlayer = (gameId, type) => {
    const service = createCharacter(gameId, type);
    service.then((answer) => setGameData(answer.data.gameData));
  };

  const startGame = (gameId) => {
    const service = gameStart(gameId);
    service.then((answer) => setGameData(answer.data.gameData));
  };

  switch (render) {
    case "login":
      return <Login changeToSignUp={changeToSignUp} login={login} />;
    case "signup":
      return <SignUp changeToLogin={changeToLogin} signup={signup} />;
    case "start":
      return <Start createGame={createGame} setJoin={setJoin} />;
    case "char":
      return (
        <CharacterChoose
          createPlayer={createPlayer}
          setRenderState={setRenderState}
          startGame={startGame}
        />
      );
    case "join":
      return <JoinGame joinGame={joinGame} setJoin={setJoin} />;
    default:
      return <App />;
  }
};

export default Routing;
