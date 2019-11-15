import React from "react";
import * as MaterialUI from "@material-ui/core";
import { translate } from "./translate";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    verticalLine: {
      position: "absolute",
      borderLeft: "1px solid blue",
      opacity: 0.4,
      height: props => props.h,
      transform: props => translate(props.x, 0)
    }
  };
});

const VerticalLine = props => {
  const { x, h } = props;
  const classes = useStyles({ x, h });
  return <div className={classes.verticalLine}></div>;
};

export default VerticalLine;
