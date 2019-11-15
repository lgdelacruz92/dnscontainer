export const xValues = ({ w, u }) => {
  let result = [];
  for (let i = u; i < w; i += u) {
    result.push(i);
  }
  return result;
};

export const yValues = ({ h, u }) => {
  return xValues({ w: h, u });
};

export const useGrid = ({ x, y, w, h, u }) => {
  return [xValues({ w, u }), yValues({ h, u })];
};
