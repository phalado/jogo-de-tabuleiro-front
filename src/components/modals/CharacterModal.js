import React from "react";
import Modal from "react-modal";

import Images from "../../constants/Images";
import CharacterData from "../../constants/CharacterData";

import styles from "../../styles/CharacterModal";

const CharacterModal = (props) => {
  const { enemies, characterModal, closeModal, characters } = props;

  Modal.setAppElement("#root");

  if (!characterModal.isOpen) return null;

  if (characterModal.heroCharacter) {
    const {
      name,
      description,
      hability,
      precision,
      hands,
      body,
      // bag,
      element,
      // extraHabilitiess,
    } = CharacterData.hero[characterModal.character];

    const { hp, xp, level } = characters.find(
      (char) => char.characterType === characterModal.character
    );

    const precisionType = [
      "Nenhuma",
      "Espadachin",
      "Machado",
      "Mira perfeita",
      "Feitiçaria",
    ];

    return (
      <div>
        <Modal
          isOpen={characterModal.isOpen}
          style={styles}
          contentLabel="Character Modal"
        >
          <h2 style={styles.title}>
            {name} - Lvl: {level}
          </h2>
          <div style={styles.bodyContainer}>
            <div style={styles.aside}>
              <img
                src={Images.player[characterModal.character]}
                style={styles.image}
                alt={characterModal.character}
              />
              <div>HP: {hp}</div>
              <div>XP: {xp}</div>
            </div>
            <div style={styles.body}>
              <div>{description}</div>
              <div>Habilidade: {hability}</div>
              <div>Precisão: {precisionType[precision]}</div>
              <div>Elemento: {element}</div>
            </div>
            <div style={styles.aside}>
              <div style={styles.hand}>
                {hands.map((item) => (
                  <div style={styles.handItemConteiner} key={item}>
                    <img
                      src={Images.weapon[item]}
                      style={styles.bagItem}
                      alt={item}
                    />
                  </div>
                ))}
              </div>
              <div style={styles.bodyItemContainer}>
                <img
                  src={Images.weapon[body]}
                  style={styles.bagItem}
                  alt={body}
                />
              </div>
            </div>
          </div>
          <div style={styles.buttonContainer}>
            <button onClick={() => closeModal()}>Fechar</button>
          </div>
        </Modal>
      </div>
    );
  }

  const {
    name,
    description,
    hability,
    hp,
    speed,
    strength,
    range,
  } = CharacterData.enemy[characterModal.character];

  const numberOfTheseEnemies = enemies.filter(
    (enemy) => enemy.type === characterModal.character
  ).length;

  return (
    <div>
      <Modal
        isOpen={characterModal.isOpen}
        style={styles}
        contentLabel="Example Modal"
      >
        <h2 style={styles.title}>{name}</h2>
        <div style={styles.bodyContainer}>
          <div style={styles.aside}>
            <img
              src={Images.enemy[characterModal.character]}
              style={styles.image}
              alt={characterModal.character}
            />
            <div>Quantidade no mapa: {numberOfTheseEnemies}</div>
          </div>
          <div style={styles.body}>
            <div>{description}</div>
            <div>Habilidade: {hability}</div>
            <div>HP: {hp}</div>
            <div>Velocidade: {speed}</div>
            <div>Força: {strength}</div>
            <div>Alcance: {range}</div>
          </div>
        </div>
        <div style={styles.buttonContainer}>
          <button onClick={() => closeModal()}>Fechar</button>
        </div>
      </Modal>
    </div>
  );
};

export default CharacterModal;
