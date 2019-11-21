import React from "react";

const BottomLiner = props => {
  const { data, siblingRefs, bottomLineRef } = props;
  React.useEffect(() => {
    const siblings = [];

    siblingRefs.current.forEach(s => {
      if (s.current && data.id !== s.current.id && siblings.length < 3) {
        siblings.push(s.current);
      }
    });

    let lineOffsetY = null;
    for (let i = 0; i < siblings.length; i++) {
      if (Math.abs(siblings[i].y + siblings[i].h - (data.y + data.h)) < 2) {
        lineOffsetY = data.y + data.h;
        break;
      }
    }

    if (lineOffsetY) {
      bottomLineRef.current.setAttribute(
        "style",
        `border-top: 1px solid orange; transform: translateY(${lineOffsetY}px)`
      );
    } else {
      bottomLineRef.current.setAttribute("style", "");
    }
  });
  return <div></div>;
};

export default BottomLiner;
