export const collectSiblings = (me, children) => {
  let siblings = [];
  children.forEach(c => {
    if (c && me.id !== c.id) {
      siblings.push(c);
    }
  });
  return siblings;
};
