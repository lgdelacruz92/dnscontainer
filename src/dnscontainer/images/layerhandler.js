// 0 <= x <= arr.length
export const moveDown = (x, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (x === i) {
      if (i > 0) {
        const temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
};

export const moveUp = (x, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (x === i) {
      if (i < arr.length - 1) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  return arr;
};
