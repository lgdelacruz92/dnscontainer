import React from "react";
import Image from "../image/image";
import { moveDown } from "./layerhandler";

const Images = props => {
  const { containerRef, imageDatas, vlRef, hlRef } = props;
  const [state, setState] = React.useState(imageDatas);
  const refs = React.useRef([]);
  state.forEach(s => refs.current.push(React.createRef()));

  return (
    <React.Fragment>
      {state.map((imageData, i) => {
        return (
          <Image
            key={i}
            ref={refs.current[i]}
            siblingRefs={refs}
            hlRef={hlRef}
            vlRef={vlRef}
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
