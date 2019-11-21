export const getSiblingRects = props => {
  const { data, siblingRefs } = props;
  const siblings = [];

  siblingRefs.current.forEach(s => {
    if (s.current && data.id !== s.current.id && siblings.length < 3) {
      if ("rect" in s.current) {
        // collect rect
        siblings.push(s.current.rect);
      } else if ("span" in s.current) {
        // collect span rect
        const spanRect = s.current.span.getBoundingClientRect();
        siblings.push({
          id: s.current.textData.id,
          x: spanRect.x,
          y: spanRect.y,
          w: spanRect.width,
          h: spanRect.height
        });
      }
    }
  });
  return siblings;
};
