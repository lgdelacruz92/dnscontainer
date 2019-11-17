export const linetool = (x, arr) => {
  const linesToCheck = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= x) {
      linesToCheck.push(arr[i]);
      if (i > 0) {
        linesToCheck.push(arr[i - 1]);
      }
      break;
    }
  }

  if (linesToCheck.length > 0) {
    for (let xi = 0; xi < linesToCheck.length; xi++) {
      if (linesToCheck[xi] - 1 <= x && x <= linesToCheck[xi] + 1) {
        return linesToCheck[xi];
      }
    }
  }
  return null;
};
