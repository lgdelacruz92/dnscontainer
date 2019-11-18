export const isVerticalCentered = (rect1, rect2) => {
  const verticalCenter1 = (rect1.y * 2 + rect1.h) / 2;
  const verticalCenter2 = (rect2.y * 2 + rect2.h) / 2;
  if (verticalCenter1 === verticalCenter2) {
    return verticalCenter1;
  } else {
    return null;
  }
};

export const isHorizontallyCentered = (rect1, rect2) => {
  const horizontalCenter1 = (rect1.x * 2 + rect1.w) / 2;
  const horizontalCenter2 = (rect2.x * 2 + rect2.w) / 2;
  if (horizontalCenter1 === horizontalCenter2) {
    return horizontalCenter2;
  } else {
    return null;
  }
};
