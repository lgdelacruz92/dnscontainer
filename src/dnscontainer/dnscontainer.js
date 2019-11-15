import React from "react";
import * as MaterialUI from "@material-ui/core";
import { useGrid } from "./gridcreator";
import { translate } from "./translate";
import VerticalLine from "./verticalline";
import HorizontalLine from "./horizontalline";
import Image from "image-drag-and-scale";
import Rectangle from "./rectangle";

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
  const page = { x: 50, y: 50, w: 500, h: 500, u: 20 };
  const [x, y] = useGrid({ w: page.w, h: page.h, u: page.u });
  const classes = useStyles({ page });
  const [imageDatas, setImageDatas] = React.useState(() => {
    let result = [];
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
      result.push(imageData);
    }
    return result;
  });

  const containerRef = React.useRef();
  const imageRefs = React.useRef([React.createRef(), React.createRef()]);

  return (
    <div ref={containerRef} className={classes.container}>
      {x.map((xi, i) => (
        <VerticalLine key={i} x={xi} h={page.h} />
      ))}
      {y.map((yi, i) => (
        <HorizontalLine y={yi} w={page.w} key={i} />
      ))}
      {imageDatas.map((data, i) => (
        <React.Fragment>
          <Rectangle onMouseMove />
          <Image
            data={data}
            containerRef={containerRef}
            ref={imageRefs.current[i]}
            onUpdate={() => {
              imageDatas[i] = imageRefs.current[i];
              setImageDatas(imageDatas);
              console.log("New image Data", imageDatas[i]);
            }}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default DNSContainer;
