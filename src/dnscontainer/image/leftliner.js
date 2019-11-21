import React from "react";
import { getSiblingRects } from "./siblingcollector";

const LeftLiner = props => {
  const { data, siblingRefs, leftLineRef } = props;
  React.useEffect(() => {
    const siblings = getSiblingRects({ data, siblingRefs });

    let lineOffsetX = null;
    for (let i = 0; i < siblings.length; i++) {
      if (Math.abs(siblings[i].x - data.x) < 2) {
        lineOffsetX = data.x;
        break;
      }
    }

    if (lineOffsetX) {
      leftLineRef.current.setAttribute(
        "style",
        `border-left: 2px solid orange; transform: translateX(${lineOffsetX}px)`
      );
    } else {
      leftLineRef.current.setAttribute("style", "");
    }
  });
  return <div></div>;
};

export default LeftLiner;
