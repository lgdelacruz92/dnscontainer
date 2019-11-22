export const getVerticalCenter = rect => {
  return (rect.y * 2 + rect.h) / 2;
};

export const getHorizontalCenter = rect => {
  return (rect.x * 2 + rect.w) / 2;
};

export const getLeft = rect => {
  return rect.x;
};

export const getTop = rect => {
  return rect.y;
};

export const getRight = rect => {
  return rect.x + rect.w;
};

export const getBottom = rect => {
  return rect.y + rect.h;
};
