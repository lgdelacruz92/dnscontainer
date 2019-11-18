import React from "react";
import Image from "../image/image";
import { moveDown } from "./layerhandler";
import { linetool } from "../utils/linetool";

const Images = props => {
  const { imageDatas, containerRef, unit, vlRefs, hlRefs, page } = props;
  const [state, setState] = React.useState(imageDatas);
  const [autoClearer, setAutoClearer] = React.useState(null);
  const [open, setOpen] = React.useState(() => {
    let result = [];
    imageDatas.forEach(im => result.push(false));
    return result;
  });

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
    const g = linetool(rect.y, unit, 1, page.w);
    if (g) {
      console.log("moving", g);
    }
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
