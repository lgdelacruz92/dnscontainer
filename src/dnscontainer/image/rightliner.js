import React from "react";
import { getSiblingRects } from "./siblingcollector";

const RightLiner = props => {
  const { data, siblingRefs, rightLineRef } = props;
  React.useEffect(() => {
    const siblings = getSiblingRects({ data, siblingRefs });

    let lineOffsetX = null;
    for (let i = 0; i < siblings.length; i++) {
      if (Math.abs(siblings[i].x + siblings[i].w - (data.x + data.w)) < 2) {
        lineOffsetX = data.x + data.w;
        break;
      }
    }

    if (lineOffsetX) {
      rightLineRef.current.setAttribute(
        "style",
        `border-left: 2px solid orange; transform: translateX(${lineOffsetX}px)`
      );
    } else {
      rightLineRef.current.setAttribute("style", "");
    }
  });
  return <div></div>;
};

export default RightLiner;
