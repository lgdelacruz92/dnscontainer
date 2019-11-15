import React from "react";
import * as MaterialUI from "@material-ui/core";
import { useGrid } from "./gridcreator";
import { translate } from "./translate";
import VerticalLine from "./verticalline";
import HorizontalLine from "./horizontalline";
import Image from "image-drag-and-scale";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    container: {
      transform: props => translate(props.page.x, props.page.y),
      width: props => props.page.w,
      height: props => props.page.h,
      position: "relative",
      border: "2px solid red"
    }
  };
});

const DNSContainer = props => {
  const page = { x: 50, y: 50, w: 500, h: 500, u: 20 };
  const [x, y] = useGrid({ w: page.w, h: page.h, u: page.u });
  const classes = useStyles({ page });

  const imageData = {
    x: 400,
    y: 200,
    translateX: 0,
    translateY: 0,
    scaledWidth: 100,
    scaledHeight: 100,
    width: 100,
    height: 100,
    src: "https://source.unsplash.com/random/1000x1000",
    alt: "random",
    id: "124",
    index: 2
  };
  return (
    <div className={classes.container}>
      {x.map(xi => (
        <VerticalLine x={xi} h={page.h} />
      ))}
      {y.map(yi => (
        <HorizontalLine y={yi} w={page.w} />
      ))}
      <Image data={imageData} />
    </div>
  );
};

export default DNSContainer;
