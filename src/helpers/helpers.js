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

// const bestRoute = (props) => {
//   const { minimapIndex, cellIndex, cell, doors, minimaps, noisyCell, path } =
//     props;

//   if (
//     path.some(
//       (square) =>
//         square.minimapIndex === minimapIndex && square.cellIndex === cellIndex
//     )
//   )
//     return Infinity;
//   if (cell.noise === noisyCell) return path.length + 1;

//   const possibleMoves = movementHash(minimapIndex);
//   const directions = ["north", "south", "east", "west"];
//   let routeSize = Infinity;

//   directions.forEach((direction) => {
//     if (openDirection({ cell, direction, doors })) {
//       routeSize = Math.min(
//         routeSize,
//         bestRoute({
//           minimapIndex: possibleMoves[direction][cellIndex].minimap,
//           cellIndex: possibleMoves[direction][cellIndex].cell,
//           cell: minimaps[possibleMoves[direction][cellIndex].minimap][
//             possibleMoves[direction][cellIndex].cell
//           ],
//           doors,
//           minimaps,
//           noisyCell,
//           path: [...path, { minimapIndex, cellIndex }],
//         })
//       );
//     }
//   });

//   return routeSize;
// };

// const enemyBestRoute = (props) => {
//   const { minimapIndex, cellIndex, cell, doors, minimaps, noisyCell } = props;

//   const possibleMoves = movementHash(minimapIndex);
//   const directions = ["north", "south", "east", "west"];
//   const routeSize = {};

//   directions.forEach((direction) => {
//     if (openDirection({ cell, direction, doors })) {
//       routeSize[direction] = Math.min(
//         Infinity,
//         bestRoute({
//           minimapIndex: possibleMoves[direction][cellIndex].minimap,
//           cellIndex: possibleMoves[direction][cellIndex].cell,
//           cell: minimaps[possibleMoves[direction][cellIndex].minimap][
//             possibleMoves[direction][cellIndex].cell
//           ],
//           doors,
//           minimaps,
//           noisyCell,
//           path: [{ minimapIndex, cellIndex }],
//         })
//       );
//     }
//   });

//   const movementDirection = Object.entries(routeSize).sort(
//     (a, b) => a[1] - b[1]
//   )[0][0];

//   return possibleMoves[movementDirection][cellIndex];
// };

// const randomMovement = props => {
//   const { cell, doors, minimapIndex, cellIndex } = props;

//   const movementDirection = randomElement(possibleMoves(cell, doors));

//   return movementHash(minimapIndex)[movementDirection][cellIndex]
// }

export {
  possibleMoves,
  randomElement,
  topNoisyCells,
  // enemyBestRoute,
  // randomMovement,
};
