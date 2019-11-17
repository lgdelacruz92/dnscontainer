import React from "react";
import * as MaterialUI from "@material-ui/core";
import clsx from "clsx";
import { translate } from "./translate";
import ImageDNS from "./imagedns";

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

const Image = props => {
  const { data, containerRef, onUpdate } = props;
  const imgRef = React.useRef();
  const [state, setState] = React.useState({
    x: data.x + data.translateX,
    y: data.y + data.translateY,
    w: data.scaledWidth,
    h: data.scaledHeight
  });
  const [unSelected, setUnselected] = React.useState(false);
  const classes = useStyles(state);

  const onImageUpdate = () => {
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
  };

  React.useEffect(() => {
    onUpdate(state, data.id);
  });

  return (
    <React.Fragment>
      <ImageDNS
        data={data}
        ref={imgRef}
        onUpdate={onImageUpdate}
        containerRef={containerRef}
        selected={unSelected}
        onClick={() => setUnselected(!unSelected)}
      />
      <div className={clsx(classes.rectangle, data.id)}></div>
    </React.Fragment>
  );
};

export default Image;
