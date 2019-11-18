import React from "react";
import * as MaterialUI from "@material-ui/core";
import { translate } from "../utils/translate";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    horizontalLine: {
      position: "absolute",
      width: props => props.w,
      transform: props => translate(0, props.y),
      zIndex: 5
    }
  };
});

const HorizontalLine = React.forwardRef((props, ref) => {
  const { y, w } = props;
  const classes = useStyles({ y, w });
  return <div ref={ref} className={classes.horizontalLine}></div>;
});

export default HorizontalLine;
