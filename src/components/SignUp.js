import React from "react";

import styles from "../styles/Login";

const SignUp = (props) => {
  const { changeToLogin } = props;

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
          <label style={styles.label} for="username">
            Usuário:
          </label>
          <input
            style={styles.input}
            type="text"
            id="username"
            name="username"
          />
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
        <div style={styles.inputContainer}>
          <label style={styles.label} for="confirm-password">
            Confirmar senha:
          </label>
          <input
            style={styles.input}
            type="password"
            id="confirm-password"
            name="confirm-password"
          />
        </div>
        <div>
          <input type="submit" value="Entrar" />
        </div>
        <div style={styles.signUpLink}>
          <button onClick={() => changeToLogin()}>Já tem conta? Entre.</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
