import React from "react";
import ImageDNS from "./imagedns";
import RightClick from "./rightclick";
import RectInfo from "./rectinfo";
import CenterLiner from "./centerliner";
import TopLiner from "./topliner";
import BottomLiner from "./bottomliner";
import LeftLiner from "./leftliner";
import RightLiner from "./rightliner";
import * as MaterialUI from "@material-ui/core";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    image: {
      position: "absolute",
      zIndex: index => index
    }
  };
});

const Image = React.forwardRef((props, ref) => {
  const {
    data,
    onMoveDown,
    onMoveUp,
    siblingRefs,
    vlRef,
    hlRef,
    leftLineRef,
    rightLineRef,
    topLineRef,
    bottomLineRef
  } = props;
  const imgRef = React.useRef();
  const classes = useStyles(data.index);
  const [state, setState] = React.useState({
    id: data.id,
    x: data.x + data.translateX,
    y: data.y + data.translateY,
    w: data.scaledWidth,
    h: data.scaledHeight
  });
  const [transforming, setTransforming] = React.useState(false);
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
        id: data.id,
        x: currentData.x + data.translateX,
        y: currentData.y + data.translateY,
        w: currentData.scaledWidth,
        h: currentData.scaledHeight
      });
    }
  };

  React.useEffect(() => {
    ref.current = state;
  });

  return (
    <div className={classes.image}>
      <ImageDNS
        {...props}
        ref={imgRef}
        onUpdate={onImageUpdate}
        selected={unSelected}
        onContextMenu={() => {
          return false;
        }}
        onClick={e => {
          setUnselected(!unSelected);
        }}
        onEndUpdate={() => setTransforming(false)}
      />
      <CenterLiner
        data={state}
        hlRef={hlRef}
        vlRef={vlRef}
        siblingRefs={siblingRefs}
      />
      <TopLiner
        data={state}
        topLineRef={topLineRef}
        siblingRefs={siblingRefs}
      />
      <BottomLiner
        data={state}
        bottomLineRef={bottomLineRef}
        siblingRefs={siblingRefs}
      />
      <LeftLiner
        data={state}
        leftLineRef={leftLineRef}
        siblingRefs={siblingRefs}
      />
      <RightLiner
        data={state}
        rightLineRef={rightLineRef}
        siblingRefs={siblingRefs}
      />
      <RectInfo data={state} open={transforming} />
      <RightClick
        open={false}
        data={state}
        onMoveDown={onMoveDown}
        onMoveUp={onMoveUp}
      />
    </div>
  );
});

export default Image;
