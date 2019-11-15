export const linetool = (x, arr) => {
  const xfovmin = x - 60;
  const xfovmax = x + 60;
  let startx = null;
  for (let i = 0; i < arr.length; i++) {
    if (xfovmin >= arr[i]) {
      startx = arr[i];
    }
  }

  if (startx) {
    for (let xi = startx; xi < xfovmax; xi += 25) {
      if (xi - 2 < x && x < xi + 2) {
        return xi;
      }
    }
  }
  return null;
};
