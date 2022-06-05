const enemiesOnRange = (props) => {
  const { enemies, currentPlayer } = props;

  return enemies.filter(
    (enemy) =>
      enemy.minimap === currentPlayer.minimap &&
      enemy.cell === currentPlayer.cell
  );
};

const playersOnRange = (props) => {
  const { characters, enemy } = props;
  return characters.filter(
    (player) => player.minimap === enemy.minimap && player.cell === enemy.cell
  );
};

const enemyToAtack = (props) => {
  const { enemies, currentPlayer } = props;

  return enemiesOnRange({ enemies, currentPlayer }).sort(
    (a, b) => a.id - b.id
  )[0];
};

export { enemiesOnRange, enemyToAtack, playersOnRange };
