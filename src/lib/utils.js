var DIRECTIONS = ['north', 'east', 'south', 'west'];
var movements = ['north', 'east', 'south', 'west', 'shoot'];

var randomMove = () => {
  return Math.random() > 0.33 ? 'move' : movements[Math.floor(Math.random() * movements.length)];
};

var getDirection = (start, end) => {
  var diffVertical = Math.abs(start[0] - end[0]);
  var diffHorizontal = Math.abs(start[1] - end[1]);

  if (diffVertical > diffHorizontal) {
    return (start[0] - end[0] > 0) ? 'north' : 'south';
  }
  return (start[1] - end[1] > 0) ? 'west' : 'east';
};

var isVisible = (originalPosition, finalPosition, direction) => {
  switch (direction) {
    case DIRECTIONS[0]:
      return originalPosition[1] === finalPosition[1] && originalPosition[0] > finalPosition[0];
      break;
    case DIRECTIONS[1]:
      return originalPosition[0] === finalPosition[0] && originalPosition[1] < finalPosition[1];
      break;
    case DIRECTIONS[2]:
      return originalPosition[1] === finalPosition[1] && originalPosition[0] < finalPosition[0];
      break;
    case DIRECTIONS[3]:
      return originalPosition[0] === finalPosition[0] && originalPosition[1] > finalPosition[1];
      break;
    default:
      break;
  }
}

module.exports = {
  randomMove,
  getDirection,
  isVisible
};
