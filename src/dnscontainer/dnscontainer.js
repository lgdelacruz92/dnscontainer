import React from "react";
import * as MaterialUI from "@material-ui/core";
import { useGrid } from "./gridcreator";
import { translate } from "./translate";
import VerticalLine from "./verticalline";
import HorizontalLine from "./horizontalline";
import Rectangle from "./rectangle";
import { linetool } from "./linetool";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    container: {
      transform: props => translate(props.page.x, props.page.y),
      width: props => props.page.w,
      height: props => props.page.h,
      position: "relative",
      border: "2px solid red",
      overflow: "hidden"
    }
  };
});

const DNSContainer = props => {
  const page = { x: 50, y: 50, w: 500, h: 500, u: 25 };
  const [x, y] = useGrid({ w: page.w, h: page.h, u: page.u });
  const classes = useStyles({ page });
  let imageDatas = [];
  for (let i = 0; i < 2; i++) {
    const imageData = {
      x: 20 + 10 * i,
      y: 100,
      translateX: 0,
      translateY: 0,
      scaledWidth: 100,
      scaledHeight: 100,
      width: 100,
      height: 100,
      src: "https://source.unsplash.com/random/1000x1000",
      alt: "random",
      id: `unique-${i}`,
      index: 1
    };
    imageDatas.push(imageData);
  }

  const checkforGridCollission = (refs, val, arr, border) => {
    refs.forEach(ref => {
      ref.current.setAttribute("style", "");
    });
    const xi = linetool(val, arr);
    if (xi) {
      const i = arr.indexOf(xi);
      refs[i].current.setAttribute("style", `${border}: 1px solid orange`);
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
        <Rectangle
          data={data}
          containerRef={containerRef}
          key={i}
          onUpdate={rect => {
            checkforGridCollission(vlRefs.current, rect.x, x, "border-left");
            checkforGridCollission(hlRefs.current, rect.y, y, "border-top");
          }}
        />
      ))}
    </div>
  );
};

export default DNSContainer;
