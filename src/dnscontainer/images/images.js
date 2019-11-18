import React from "react";
import Image from "../image/image";
import { moveDown } from "./layerhandler";

const Images = props => {
  const { containerRef, imageDatas } = props;
  const [state, setState] = React.useState(imageDatas);

  return (
    <React.Fragment>
      {state.map((imageData, i) => {
        return (
          <Image
            key={i}
            data={imageData}
            containerRef={containerRef}
            onMoveDown={i => {
              moveDown(i, state);
              setState([...state]);
            }}
          />
        );
      })}
    </React.Fragment>
  );
};

export default Images;
