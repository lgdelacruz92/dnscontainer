import React from "react";
import * as MaterialUI from "@material-ui/core";
import { useGrid } from "./grid/gridcreator";
import VerticalLine from "./grid/verticalline";
import HorizontalLine from "./grid/horizontalline";
import Images from "./images/images";

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

const DNSContainer = props => {
  const { width, height, imageDatas } = props;
  if (!width || !height || !imageDatas) {
    throw Error("Width, height, and imageDatas array is required");
  }
  if (!Array.isArray(imageDatas)) {
    throw Error(
      "imageDatas must be an array of type ImageData. Please refer to getting started in the packages."
    );
  }

  const page = { w: width, h: height, u: 5 };
  const [x, y] = useGrid({ w: page.w, h: page.h, u: page.u });
  const classes = useStyles({ page });

  const containerRef = React.useRef();
  let vlRefResult = [];
  x.forEach(xi => vlRefResult.push(React.createRef()));
  const vlRefs = React.useRef(vlRefResult);

  let hlRefResult = [];
  y.forEach(yi => hlRefResult.push(React.createRef()));
  const hlRefs = React.useRef(hlRefResult);

  const clearLines = refs => {
    refs.forEach(ref => {
      ref.current.setAttribute("style", "");
    });
  };

  React.useEffect(() => {
    const onMouseUp = () => {
      clearLines(vlRefs.current);
      clearLines(hlRefs.current);
    };
    document.addEventListener("mouseup", onMouseUp);
    return () => document.removeEventListener("mouseup", onMouseUp);
  }, []);

  return (
    <div ref={containerRef} className={classes.container}>
      {x.map((xi, i) => (
        <VerticalLine ref={vlRefs.current[i]} key={i} x={xi} h={page.h} />
      ))}
      {y.map((yi, i) => (
        <HorizontalLine ref={hlRefs.current[i]} y={yi} w={page.w} key={i} />
      ))}
      <Images
        containerRef={containerRef}
        x={x}
        y={y}
        vlRefs={vlRefs}
        hlRefs={hlRefs}
        imageDatas={imageDatas}
        clearLines={clearLines}
      />
    </div>
  );
};

export default DNSContainer;
