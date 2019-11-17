import React from "react";
import * as MaterialUI from "@material-ui/core";
import { useGrid } from "./gridcreator";
import VerticalLine from "./verticalline";
import HorizontalLine from "./horizontalline";
import Image from "./Image";
import { linetool } from "./linetool";

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

  const page = { w: width, h: height, u: 10 };
  const [x, y] = useGrid({ w: page.w, h: page.h, u: page.u });
  const classes = useStyles({ page });

  const turnOn = (v, arr, refs, border) => {
    const i = arr.indexOf(v);
    if (refs[i]) {
      refs[i].current.setAttribute("style", `${border}: 1px solid orange`);
    }
  };

  const checkforGridCollission = (refs, low, hi, arr, border) => {
    refs.forEach(ref => {
      ref.current.setAttribute("style", "");
    });
    const v1 = linetool(low, arr);
    const v2 = linetool(hi, arr);
    const center = linetool((low + hi) / 2, arr);

    if (center) {
      turnOn(center, arr, refs, border);
    } else {
      if (v1) {
        turnOn(v1, arr, refs, border);
      }
      if (v2) {
        turnOn(v2, arr, refs, border);
      }
    }
  };

  const containerRef = React.useRef();
  let vlRefResult = [];
  x.forEach(xi => vlRefResult.push(React.createRef()));
  const vlRefs = React.useRef(vlRefResult);

  let hlRefResult = [];
  y.forEach(yi => hlRefResult.push(React.createRef()));
  const hlRefs = React.useRef(hlRefResult);

  return (
    <div ref={containerRef} className={classes.container}>
      {x.map((xi, i) => (
        <VerticalLine ref={vlRefs.current[i]} key={i} x={xi} h={page.h} />
      ))}
      {y.map((yi, i) => (
        <HorizontalLine ref={hlRefs.current[i]} y={yi} w={page.w} key={i} />
      ))}
      {imageDatas.map((data, i) => (
        <Image
          data={data}
          containerRef={containerRef}
          key={i}
          onUpdate={rect => {
            checkforGridCollission(
              vlRefs.current,
              rect.x,
              rect.x + rect.w,
              x,
              "border-left"
            );
            checkforGridCollission(
              hlRefs.current,
              rect.y,
              rect.y + rect.h,
              y,
              "border-top"
            );
          }}
        />
      ))}
    </div>
  );
};

export default DNSContainer;
