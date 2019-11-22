export const isVerticallyCentered = (me, sibling) => {
  // Remember: This is horizontal line
  return (me.y * 2 + me.h) / 2 === (sibling.y * 2 + sibling.h) / 2;
};

export const isHorizontallyCentered = (me, sibling) => {
  // Remember: this is vertical line
  return (me.x * 2 + me.w) / 2 === (sibling.x * 2 + sibling.w) / 2;
};
