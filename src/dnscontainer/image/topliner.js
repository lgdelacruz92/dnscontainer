import React from "react";

const TopLiner = props => {
  const { data, siblingRefs, topLineRef } = props;
  React.useEffect(() => {
    const siblings = [];

    siblingRefs.current.forEach(s => {
      if (s.current && data.id !== s.current.id && siblings.length < 3) {
        siblings.push(s.current);
      }
    });

    let lineOffsetY = null;
    for (let i = 0; i < siblings.length; i++) {
      if (siblings[i].y === data.y) {
        lineOffsetY = data.y;
        break;
      }
    }

    if (lineOffsetY) {
      topLineRef.current.setAttribute(
        "style",
        `border: 1px solid orange; transform: translateY(${lineOffsetY}px)`
      );
    } else {
      topLineRef.current.setAttribute("style", "");
    }
  });
  return <div></div>;
};

export default TopLiner;
