export const isVerticallyCentered = (me, sibling) => {
  // Remember: This is horizontal line
  return Math.abs((me.y * 2 + me.h) / 2 - (sibling.y * 2 + sibling.h) / 2) < 2;
};

export const isHorizontallyCentered = (me, sibling) => {
  // Remember: this is vertical line
  return Math.abs((me.x * 2 + me.w) / 2 - (sibling.x * 2 + sibling.w) / 2) < 2;
};

export const isTopAligned = (me, sibling) => {
  return Math.abs(me.y - sibling.y) < 2;
};

export const isBottomAligned = (me, sibling) => {
  return Math.abs(me.y + me.h - (sibling.y + sibling.h)) < 2;
};

export const isRightAligned = (me, sibling) => {
  return Math.abs(me.x + me.w - (sibling.x + sibling.w)) < 2;
};

export const isLeftAligned = (me, sibling) => {
  return Math.abs(me.x - sibling.x) < 2;
};
