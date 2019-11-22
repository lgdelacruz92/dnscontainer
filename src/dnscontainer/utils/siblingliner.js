export const isVerticallyCentered = (me, sibling) => {
  // Remember: This is horizontal line
  return (me.y * 2 + me.h) / 2 === (sibling.y * 2 + sibling.h) / 2;
};

export const isHorizontallyCentered = (me, sibling) => {
  // Remember: this is vertical line
  return (me.x * 2 + me.w) / 2 === (sibling.x * 2 + sibling.w) / 2;
};

export const isTopAligned = (me, sibling) => {
  return me.y === sibling.y;
};

export const isBottomAligned = (me, sibling) => {
  return me.y + me.h === sibling.y + sibling.h;
};

export const isRightAligned = (me, sibling) => {
  return me.x + me.w === sibling.x + sibling.w;
};

export const isLeftAligned = (me, sibling) => {
  return me.x === sibling.x;
};
