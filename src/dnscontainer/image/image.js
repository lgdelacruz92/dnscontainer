import React from "react";
import * as MaterialUI from "@material-ui/core";
import clsx from "clsx";
import { translate } from "../utils/translate";
import ImageDNS from "./imagedns";
import RightClick from "./rightclick";

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
    },
    rectinfo: {
      width: 70,
      height: 10,
      opacity: 0.7,
      zIndex: 5,
      background: "black",
      borderRadius: 5,
      transform: props => translate(props.x, props.y - 20),
      color: "white",
      fontSize: "0.5em",
      padding: 5,
      textAlign: "center",
      position: "absolute"
    }
  };
});

const Image = props => {
  const {
    data,
    containerRef,
    onUpdate,
    onClick,
    onContextMenu,
    openRightMenu,
    onMoveDown,
    onMoveUp
  } = props;
  const imgRef = React.useRef();
  const [state, setState] = React.useState({
    x: data.x + data.translateX,
    y: data.y + data.translateY,
    w: data.scaledWidth,
    h: data.scaledHeight
  });
  const [transforming, setTransforming] = React.useState(false);
  const classes = useStyles(state);
  const [unSelected, setUnselected] = React.useState(false);

  const onImageUpdate = () => {
    const currentData = imgRef.current.data;
    if (
      currentData.x + data.translateX !== state.x ||
      currentData.y + data.translateY !== state.y ||
      currentData.scaledHeight !== state.h ||
      currentData.scaledWidth !== state.w
    ) {
      if (
        currentData.scaledHeight !== state.h ||
        currentData.scaledWidth !== state.w
      ) {
        setTransforming(true);
      }
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
        onContextMenu={onContextMenu}
        onClick={e => {
          setUnselected(!unSelected);
          onClick(e);
        }}
        onEndUpdate={() => setTransforming(false)}
      />
      <div className={clsx(classes.rectangle, data.id)}></div>
      <div
        className={clsx(classes.rectinfo)}
        hidden={!transforming}
      >{`w: ${state.w.toPrecision(4)} h: ${state.h.toPrecision(4)}`}</div>
      <RightClick
        open={openRightMenu}
        data={data}
        onMoveDown={onMoveDown}
        onMoveUp={onMoveUp}
      />
    </React.Fragment>
  );
};

export default Image;
