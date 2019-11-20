import React from "react";
import * as MaterialUI from "@material-ui/core";
import VerticalLine from "./grid/verticalline";
import HorizontalLine from "./grid/horizontalline";
import Content from "./content/contents";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    container: {
      width: props => props.page.w,
      height: props => props.page.h,
      position: "relative",
      overflow: "hidden",
      background: "white",
      boxShadow: "2px 2px 4px grey"
    }
  };
});

const DNSContainer = React.forwardRef((props, ref) => {
  const { width, height, datas } = props;
  if (!width || !height || !datas) {
    throw Error("Width, height, and imageDatas array is required");
  }
  if (!Array.isArray(datas)) {
    throw Error(
      "datas must be an array. Please refer to getting started in the packages."
    );
  }

  const page = { w: width, h: height };
  const classes = useStyles({ page });
  const containerRef = React.useRef();
  const vlRef = React.useRef();
  const leftLineRef = React.useRef();
  const rightLineRef = React.useRef();
  const hlRef = React.useRef();
  const topLineRef = React.useRef();
  const bottomLineRef = React.useRef();

  React.useEffect(() => {
    const clearAllLines = () => {
      vlRef.current.setAttribute("style", "");
      leftLineRef.current.setAttribute("style", "");
      rightLineRef.current.setAttribute("style", "");
      hlRef.current.setAttribute("style", "");
      topLineRef.current.setAttribute("style", "");
      bottomLineRef.current.setAttribute("style", "");
    };
    document.addEventListener("mouseup", clearAllLines);
    return () => {
      document.removeEventListener("mouseup", clearAllLines);
    };
  }, []);

  const contentsRef = React.useRef();

  React.useEffect(() => {
    if (ref) {
      ref.current = contentsRef.current;
    }
  });

  return (
    <div ref={containerRef} className={classes.container}>
      <Content
        ref={contentsRef}
        vlRef={vlRef}
        hlRef={hlRef}
        leftLineRef={leftLineRef}
        rightLineRef={rightLineRef}
        topLineRef={topLineRef}
        bottomLineRef={bottomLineRef}
        containerRef={containerRef}
        datas={datas}
      />
      <VerticalLine ref={vlRef} x={0} h={page.h} />
      <VerticalLine ref={leftLineRef} x={0} h={page.h} />
      <VerticalLine ref={rightLineRef} x={0} h={page.h} />
      <HorizontalLine ref={hlRef} x={0} w={page.w} />
      <HorizontalLine ref={topLineRef} x={0} w={page.w} />
      <HorizontalLine ref={bottomLineRef} x={0} w={page.w} />
    </div>
  );
});

export default DNSContainer;
