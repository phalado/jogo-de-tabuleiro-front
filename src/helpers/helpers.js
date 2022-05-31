const openDirection = (props) => {
  const { cell, direction, doors } = props;

  return (
    cell[direction] === "open" ||
    cell[direction] === "openWall" ||
    doors.some((door) => door.direction === direction && !door.closed)
  );
};

const doorData = (minimap, cell, doors) => {
  return doors.map((door) => {
    const { closed, cell1, cell2 } = door;

    if (cell1.minimap === minimap && cell1.cell === cell)
      return { direction: cell1.position, closed };
    else return { direction: cell2.position, closed };
  });
};

const possibleMoves = (minimap, cell, doors) => {
  const directions = ["north", "south", "east", "west"];

  const moves = directions.filter((direction) =>
    openDirection({
      cell,
      direction,
      doors: doorData(minimap, cell.position, doors),
    })
  );

  return moves;
};

const randomElement = (array) =>
  array[Math.floor(Math.random() * array.length)];

const topNoisyCells = (cells) => {
  const noisyCells = cells.sort((a, b) => b.noise - a.noise);
  return noisyCells.filter((cell) => cell.noise === noisyCells[0].noise);
};

const countEnemies = (enemiesArray) => {
  let enemiesHash = {};
  enemiesArray.forEach((enemy) => {
    enemiesHash[enemy.type] = enemiesHash[enemy.type]
      ? enemiesHash[enemy.type] + 1
      : 1;
  });

  return enemiesHash;
};

export { possibleMoves, randomElement, topNoisyCells, countEnemies };
