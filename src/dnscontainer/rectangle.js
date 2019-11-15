import React from "react";
import * as MaterialUI from "@material-ui/core";
import clsx from "clsx";
import Image from "image-drag-and-scale";
import { translate } from "./translate";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    rectangle: {
      position: "absolute",
      width: props => props.w,
      height: props => props.h,
      background: "black",
      opacity: 0.5,
      zIndex: -2,
      transform: props => translate(props.x, props.y)
    }
  };
});

const Rectangle = props => {
  const { data, containerRef, onUpdate } = props;
  const imgRef = React.useRef();
  const [state, setState] = React.useState({
    x: data.x + data.translateX,
    y: data.y + data.translateY,
    w: data.scaledWidth,
    h: data.scaledHeight
  });
  const classes = useStyles(state);

  React.useEffect(() => {
    onUpdate(state, data.id);
  });

  return (
    <React.Fragment>
      <Image
        data={data}
        containerRef={containerRef}
        ref={imgRef}
        onUpdate={() => {
          const currentData = imgRef.current.data;
          if (
            currentData.x + data.translateX !== state.x ||
            currentData.y + data.translateY !== state.y ||
            currentData.scaledHeight !== state.h ||
            currentData.scaledWidth !== state.w
          ) {
            setState({
              x: currentData.x + data.translateX,
              y: currentData.y + data.translateY,
              w: currentData.scaledWidth,
              h: currentData.scaledHeight
            });
          }
        }}
      />
      <div className={clsx(classes.rectangle, data.id)}></div>
    </React.Fragment>
  );
};

export default Rectangle;
