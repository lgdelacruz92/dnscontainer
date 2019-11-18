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
      console.log(
        "Should triggering vl ref or hl ref",
        vlRef.current,
        hlRef.current
      );
    }
  });
  return <div></div>;
};

export default GridChecker;
