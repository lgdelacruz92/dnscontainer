import React from "react";
import Image from "../image/image";
import { moveDown } from "./layerhandler";

const Images = props => {
  const { containerRef, page, vlRefs, hlRefs, imageDatas } = props;
  const [state, setState] = React.useState(imageDatas);

  return (
    <React.Fragment>
      {state.map((imageData, i) => {
        return (
          <Image
            key={i}
            index={i}
            data={imageData}
            containerRef={containerRef}
            onMoveDown={i => {
              moveDown(i, state);
              setState([...state]);
            }}
            vlRefs={vlRefs}
            hlRefs={hlRefs}
            page={page}
          />
        );
      })}
    </React.Fragment>
  );
};

export default Images;
