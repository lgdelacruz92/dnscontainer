import React from "react";
import { getSiblingRects } from "./siblingcollector";

const TopLiner = props => {
  const { data, siblingRefs, topLineRef } = props;
  React.useEffect(() => {
    const siblings = getSiblingRects({ data, siblingRefs });

    let lineOffsetY = null;
    for (let i = 0; i < siblings.length; i++) {
      if (Math.abs(siblings[i].y - data.y) < 2) {
        lineOffsetY = data.y;
        break;
      }
    }

    if (lineOffsetY) {
      topLineRef.current.setAttribute(
        "style",
        `border-top: 2px solid orange; transform: translateY(${lineOffsetY}px)`
      );
    } else {
      topLineRef.current.setAttribute("style", "");
    }
  });
  return <div></div>;
};

export default TopLiner;
