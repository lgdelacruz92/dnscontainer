import React from "react";

const LeftLiner = props => {
  const { data, siblingRefs, leftLineRef } = props;
  React.useEffect(() => {
    const siblings = [];

    siblingRefs.current.forEach(s => {
      if (s.current && data.id !== s.current.id && siblings.length < 3) {
        siblings.push(s.current);
      }
    });

    let lineOffsetX = null;
    for (let i = 0; i < siblings.length; i++) {
      if (siblings[i].x === data.x) {
        lineOffsetX = data.x;
        break;
      }
    }

    if (lineOffsetX) {
      leftLineRef.current.setAttribute(
        "style",
        `border: 1px solid orange; transform: translateX(${lineOffsetX}px)`
      );
    } else {
      leftLineRef.current.setAttribute("style", "");
    }
  });
  return <div></div>;
};

export default LeftLiner;
