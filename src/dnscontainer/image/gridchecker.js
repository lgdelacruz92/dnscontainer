import React from "react";
import { lineWithSiblings } from "../siblingliner/siblingliner";

const GridChecker = props => {
  const { data, siblingRefs, vlRef, hlRef } = props;
  React.useEffect(() => {
    const siblings = [];

    siblingRefs.current.forEach(s => {
      if (s.current && data.id !== s.current.id && siblings.length < 5) {
        siblings.push(s.current);
      }
    });

    const result = lineWithSiblings(data, siblings);

    if (result.length > 0) {
      result.forEach(line => {
        if (line.orientationCentered === "horizontal") {
          vlRef.current.setAttribute(
            "style",
            `border-left: 2px solid orange; transform: translateX(${line.offsetX}px)`
          );
        }

        if (line.orientationCentered === "vertical") {
          hlRef.current.setAttribute(
            "style",
            `border-top: 2px solid orange; transform: translateY(${line.offsetY}px)`
          );
        }
      });
    } else {
      hlRef.current.setAttribute("style", "");
      vlRef.current.setAttribute("style", "");
    }
  });
  return <div></div>;
};

export default GridChecker;
