import React from "react";
import { linetool } from "../utils/linetool";
import Image from "../image/image";
import { moveDown } from "./layerhandler";

const Images = props => {
  const { x, y, vlRefs, hlRefs, imageDatas, containerRef, clearLines } = props;
  const [state, setState] = React.useState(imageDatas);
  const [autoClearer, setAutoClearer] = React.useState(null);
  const [open, setOpen] = React.useState(() => {
    let result = [];
    imageDatas.forEach(im => result.push(false));
    return result;
  });

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

  const onContextMenu = (e, i, data) => {
    if (e.target.classList.contains(data.id)) {
      open[i] = !open[i];

      setOpen([...open]);
      const newTimeout = setTimeout(() => {
        let result = [];
        imageDatas.forEach(im => result.push(false));
        setOpen(result);
      }, 3000);
      setAutoClearer(newTimeout);
      e.preventDefault();
      e.stopPropagation();
    }
    return false;
  };

  const onClick = (e, i, data) => {
    if (e.target.classList.contains(data.id)) {
      open[i] = false;
      setOpen([...open]);
      clearTimeout(autoClearer);
    }
  };

  const onUpdate = rect => {
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
  };

  return (
    <React.Fragment>
      {state.map((data, i) => (
        <Image
          data={data}
          containerRef={containerRef}
          key={i}
          onContextMenu={e => {
            onContextMenu(e, i, data);
          }}
          onClick={e => {
            onClick(e, i, data);
          }}
          openRightMenu={open[i]}
          onUpdate={onUpdate}
          onMoveDown={e => {
            moveDown(i, state);
            setState([...state]);
          }}
        />
      ))}
    </React.Fragment>
  );
};

export default Images;
