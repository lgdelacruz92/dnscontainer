// 0 <= x <= arr.length
export const moveDown = (x, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (x === arr[i].index) {
      if (i > 0) {
        const temp = arr[i - 1].index;
        arr[i - 1].index = arr[i].index;
        arr[i].index = temp;
      }
    }
  }
  return arr;
};
