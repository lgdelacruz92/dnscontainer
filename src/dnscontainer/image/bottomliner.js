import React from "react";
import { getSiblingRects } from "./siblingcollector";

const BottomLiner = props => {
  const { data, siblingRefs, bottomLineRef } = props;
  React.useEffect(() => {
    const siblings = getSiblingRects({ data, siblingRefs });

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
        `border-top: 2px solid orange; transform: translateY(${lineOffsetY}px)`
      );
    } else {
      bottomLineRef.current.setAttribute("style", "");
    }
  });
  return <div></div>;
};

export default BottomLiner;
