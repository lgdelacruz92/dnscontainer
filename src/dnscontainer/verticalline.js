import React from "react";
import * as MaterialUI from "@material-ui/core";
import { translate } from "./translate";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    verticalLine: {
      position: "absolute",
      height: props => props.h,
      transform: props => translate(props.x, 0)
    }
  };
});

const VerticalLine = React.forwardRef((props, ref) => {
  const { x, h } = props;
  const classes = useStyles({ x, h });
  return <div ref={ref} className={classes.verticalLine}></div>;
});

export default VerticalLine;
