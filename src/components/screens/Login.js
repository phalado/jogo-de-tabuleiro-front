import React from "react";

import styles from "../../styles/Login";

const Login = (props) => {
  const { changeToSignUp, login } = props;

  const loginHandler = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    login(email, password);
  };

  return (
    <div style={styles.loginContainer}>
      <div style={styles.formContainer}>
        <div style={styles.inputContainer}>
          <label style={styles.label} for="email">
            Email:
          </label>
          <input style={styles.input} type="email" id="email" name="email" />
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.label} for="password">
            Senha:
          </label>
          <input
            style={styles.input}
            type="password"
            id="password"
            name="password"
          />
        </div>
        <div>
          <input type="submit" value="Entrar" onClick={() => loginHandler()} />
        </div>
        <div style={styles.signUpLink}>
          <button onClick={() => changeToSignUp()}>
            Não tem conta? Crie uma.
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
