import React from "react";
import * as MaterialUI from "@material-ui/core";
import clsx from "clsx";
import Image from "image-drag-and-scale";
import { translate } from "./translate";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    rectangle: {
      position: "absolute",
      width: props => props.scaledWidth,
      height: props => props.scaledHeight,
      background: "black",
      opacity: 0.5,
      zIndex: -2,
      transform: props =>
        translate(props.x + props.translateX, props.y + props.translateY)
    }
  };
});

const Rectangle = props => {
  const { id, data, containerRef } = props;
  const imgRef = React.useRef();
  const [state, setState] = React.useState({
    x: data.x,
    y: data.y,
    scaledHeight: data.scaledHeight,
    scaledWidth: data.scaledWidth,
    translateX: data.translateX,
    translateY: data.translateY
  });
  const classes = useStyles(state);

  return (
    <React.Fragment>
      <Image
        data={data}
        containerRef={containerRef}
        ref={imgRef}
        onUpdate={() => {
          const currentData = imgRef.current.data;
          if (
            currentData.x !== state.x ||
            currentData.y !== state.y ||
            currentData.scaledHeight !== state.scaledHeight ||
            currentData.scaledWidth !== state.scaledWidth ||
            currentData.translateX !== state.translateX ||
            currentData.translateY !== state.translateY
          ) {
            setState({
              x: currentData.x,
              y: currentData.y,
              scaledHeight: currentData.scaledHeight,
              scaledWidth: currentData.scaledWidth,
              translateX: currentData.translateX,
              translateY: currentData.translateY
            });
          }
        }}
      />
      <div className={clsx(classes.rectangle, id)}></div>
    </React.Fragment>
  );
};

export default Rectangle;
