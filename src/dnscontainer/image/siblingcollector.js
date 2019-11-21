export const getSiblingRects = props => {
  const { data, siblingRefs } = props;
  const siblings = [];

  siblingRefs.current.forEach(s => {
    if (s.current && "rect" in s.current && siblings.length < 3) {
      // collect rect
      if (data.id !== s.current.imgRef.data.id) {
        siblings.push(s.current.rect);
      }
    } else if (s.current && "span" in s.current && siblings.length < 3) {
      // collect span rect
      if (data.id !== s.current.textData.id) {
        const spanRect = s.current.span.getBoundingClientRect();
        siblings.push({
          id: s.current.textData.id,
          x: s.current.textData.x,
          y: s.current.textData.y + 33.3,
          w: spanRect.width,
          h: spanRect.height
        });
      }
    }
  });
  return siblings;
};
