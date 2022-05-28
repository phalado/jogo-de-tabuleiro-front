import React, { useEffect } from "react";
import { ReactSession } from "react-client-session";

import Login from "./Login";
import SignUp from "./SignUp";
import App from "../containers/App";
import { loginUser, requestUserData } from "../services/ApiServices";

const Routing = (props) => {
  const { currentUser, setCurrentUser } = props;

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

    if (!ReactSession.get("gotData")) {
      const current_user_id = ReactSession.get("id");

      if (current_user_id !== undefined && current_user_id !== 0) {
        const service = requestUserData(current_user_id);
        service.then((answer) => setStateAfterRequest(answer.data));
      }
    }
  }, [setCurrentUser, currentUser]);

  const changeToSignUp = () => {
    setCurrentUser({ email: null, id: 0, expires_at: null, token: null });
  };

  const changeToLogin = () => {
    setCurrentUser({ email: null, id: null, expires_at: null, token: null });
  };

  const login = (email, password) => {
    loginUser(email, password).then((answer) => {
      setCurrentUser(answer.data);
      setSession(answer.data);
    });
  };

  const current_user_id = ReactSession.get("id");

  if (current_user_id === undefined)
    return <Login changeToSignUp={changeToSignUp} login={login} />;
  else if (current_user_id === 0)
    return <SignUp changeToLogin={changeToLogin} />;
  else return <App />;
};

export default Routing;
