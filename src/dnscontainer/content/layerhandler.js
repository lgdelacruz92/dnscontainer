// 0 <= x <= arr.length
export const moveDown = (x, arr) => {
  let indexChanged = null;

  for (let i = 0; i < arr.length; i++) {
    if (x === arr[i].index) {
      arr[i].index -= 1;
      indexChanged = i;
      break;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (x - 1 === arr[i].index && indexChanged !== null && indexChanged !== i) {
      arr[i].index += 1;
      break;
    }
  }
  return arr;
};

export const moveUp = (x, arr) => {
  let indexChanged = null;
  for (let i = 0; i < arr.length; i++) {
    if (x === arr[i].index) {
      arr[i].index += 1;
      indexChanged = i;
      break;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (x + 1 === arr[i].index && indexChanged !== null && indexChanged !== i) {
      arr[i].index -= 1;
      break;
    }
  }
  return arr;
};
