export const isVerticalCentered = (rect1, rect2) => {
  const verticalCenter1 = (rect1.y * 2 + rect1.h) / 2;
  const verticalCenter2 = (rect2.y * 2 + rect2.h) / 2;
  if (Math.abs(verticalCenter1 - verticalCenter2) < 1) {
    return verticalCenter1;
  } else {
    return null;
  }
};

export const isHorizontallyCentered = (rect1, rect2) => {
  const horizontalCenter1 = (rect1.x * 2 + rect1.w) / 2;
  const horizontalCenter2 = (rect2.x * 2 + rect2.w) / 2;
  if (Math.abs(horizontalCenter1 - horizontalCenter2) < 1) {
    return horizontalCenter2;
  } else {
    return null;
  }
};

export const lineWithSiblings = (rect, siblings) => {
  let result = [];
  siblings.forEach(sibling => {
    if (sibling) {
      const verticalCenter = isVerticalCentered(sibling, rect);
      if (verticalCenter) {
        result.push({
          offsetY: verticalCenter,
          type: "center",
          orientationCentered: "vertical"
        });
      }

      const horizontalCenter = isHorizontallyCentered(sibling, rect);
      if (horizontalCenter) {
        result.push({
          offsetX: horizontalCenter,
          type: "center",
          orientationCentered: "horizontal"
        });
      }
    }
  });

  return result;
};
