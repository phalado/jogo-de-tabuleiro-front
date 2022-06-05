import React from "react";
import Modal from "react-modal";
import Dice from "react-dice-roll";

import Images from "../../constants/Images";
import CharacterData from "../../constants/CharacterData";

import styles from "../../styles/CharacterModal";
import { hitCharacter, hitEnemy, missEnemy } from "../../services/ApiServices";

const AtackModal = (props) => {
  const { atackModal, gameData, closeAtackModal, changeEnemyAction } = props;

  Modal.setAppElement("#root");

  if (!atackModal.isOpen) return null;
  if (!atackModal.isPlayer && gameData.currentEnemyId < 0) closeAtackModal();

  if (atackModal.isPlayer) {
    const atacker = atackModal.atacker;
    const defender = atackModal.defender;

    const atackerData = CharacterData.hero[atacker.characterType];
    const defenderData = CharacterData.enemy[defender.type];

    const atackRoutine = (diceValue) => {
      if (diceValue >= defenderData.dice) {
        const resultBlock = document.getElementById("hit-container");
        resultBlock.style.display = "block";
        resultBlock.style.animation = "slideRight 2s";
        setTimeout(() => (resultBlock.style.display = "none"), 2000);
      } else {
        const resultBlock = document.getElementById("err-container");
        resultBlock.style.display = "block";
        resultBlock.style.animation = "slideLeft 2s";
        setTimeout(() => (resultBlock.style.display = "none"), 2000);
      }

      setTimeout(() => {
        closeAtackModal();
        if (diceValue >= defenderData.dice)
          hitEnemy(atacker.characterType, defender.id);
        else missEnemy(atacker.characterType);
      }, 3000);
    };

    return (
      <div>
        <Modal
          isOpen={atackModal.isOpen}
          style={styles}
          contentLabel="Example Modal"
        >
          <h2 style={styles.title}>Clique no dado para atacar</h2>
          <div style={styles.bodyContainer}>
            <div style={styles.characterContainer}>
              <img
                src={Images.player[atacker.characterType]}
                style={styles.image}
                alt={atackModal.character}
              />
              <div>Atacante: {atackerData.name}</div>
            </div>
            <div style={styles.diceContainer}>
              <Dice
                defaultValue={1}
                size={100}
                onRoll={(diceValue) => atackRoutine(diceValue)}
              />
            </div>
            <div style={styles.characterContainer}>
              <img
                src={Images.enemy[defender.type]}
                style={styles.image}
                alt={atackModal.character}
              />
              <div>Defensor: {defenderData.name}</div>
              <div>Defesa: {defenderData.dice}</div>
            </div>
            <div id="hit-container" style={styles.hitContainer}>
              <h1>Acertou!!!!</h1>
            </div>
            <div id="err-container" style={styles.errContainer}>
              <h1>Errou!!!!</h1>
            </div>
          </div>
          <div style={styles.buttonContainer}>
            <button onClick={() => closeAtackModal()}>Fechar</button>
          </div>
        </Modal>
      </div>
    );
  }

  const atackRoutine = (diceValue) => {
    if (diceValue < 7) {
      const resultBlock = document.getElementById("hit-container");
      resultBlock.style.display = "block";
      resultBlock.style.animation = "slideRight 2s";
      setTimeout(() => (resultBlock.style.display = "none"), 2000);
    } else {
      const resultBlock = document.getElementById("err-container");
      resultBlock.style.display = "block";
      resultBlock.style.animation = "slideLeft 2s";
      setTimeout(() => (resultBlock.style.display = "none"), 2000);
    }

    setTimeout(() => {
      if (diceValue < 7) {
        console.log(defender, "hit");
        const response = hitCharacter(defender.characterType);
        response.then((answer) => {
          if (answer.status === 200) changeEnemyAction(true);
        });
      } else {
        console.log(defender, "miss");
        changeEnemyAction(true);
      }
      closeAtackModal();
    }, 3000);
  };

  const atacker = atackModal.atacker;
  const defender = atackModal.defender;
  // console.log(atacker, defender);

  const atackerData = CharacterData.enemy[atacker.type];
  const defenderData = CharacterData.hero[defender.characterType];

  // console.log(atackerData, defenderData);
  // console.log(defenderData.dice);

  return (
    <div>
      <Modal
        isOpen={atackModal.isOpen}
        style={styles}
        contentLabel="Example Modal"
      >
        <h2 style={styles.title}>Clique no dado para tentar defender</h2>
        <div style={styles.bodyContainer}>
          <div style={styles.characterContainer}>
            <img
              src={Images.enemy[atacker.type]}
              style={styles.image}
              alt={atackModal.character}
            />
            <div>Atacante: {atackerData.name}</div>
          </div>
          <div style={styles.diceContainer}>
            <Dice
              defaultValue={1}
              size={100}
              onRoll={(diceValue) => atackRoutine(diceValue)}
            />
          </div>
          <div style={styles.characterContainer}>
            <img
              src={Images.player[defender.characterType]}
              style={styles.image}
              alt={atackModal.character}
            />
            <div>Defensor: {defenderData.name}</div>
            <div>Defesa: 6</div>
          </div>
          <div id="hit-container" style={styles.errContainer}>
            <h1>Acertou!!!!</h1>
          </div>
          <div id="err-container" style={styles.hitContainer}>
            <h1>Defendeu!!!!</h1>
          </div>
        </div>
        <div style={styles.buttonContainer}>
          <button onClick={() => closeAtackModal()}>Fechar</button>
        </div>
      </Modal>
    </div>
  );
};

export default AtackModal;
