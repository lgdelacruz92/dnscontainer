import React from "react";
import { linetool } from "../utils/linetool";
import Image from "../image/image";

const Images = props => {
  const { x, y, vlRefs, hlRefs, imageDatas, containerRef, clearLines } = props;
  const turnOn = (v, arr, refs, border) => {
    const i = arr.indexOf(v);
    if (refs[i]) {
      refs[i].current.setAttribute("style", `${border}: 1px solid orange`);
    }
  };

  const checkforGridCollission = (refs, low, hi, arr, border) => {
    clearLines(refs);
    const v1 = linetool(low, arr);
    const v2 = linetool(hi, arr);
    const center = linetool((low + hi) / 2, arr);

    if (center) {
      turnOn(center, arr, refs, border);
    } else {
      if (v1) {
        turnOn(v1, arr, refs, border);
      }
      if (v2) {
        turnOn(v2, arr, refs, border);
      }
    }
  };
  return (
    <React.Fragment>
      {imageDatas.map((data, i) => (
        <Image
          data={data}
          containerRef={containerRef}
          key={i}
          onUpdate={rect => {
            checkforGridCollission(
              vlRefs.current,
              rect.x,
              rect.x + rect.w,
              x,
              "border-left"
            );
            checkforGridCollission(
              hlRefs.current,
              rect.y,
              rect.y + rect.h,
              y,
              "border-top"
            );
          }}
        />
      ))}
    </React.Fragment>
  );
};

export default Images;
