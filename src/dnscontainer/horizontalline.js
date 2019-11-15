import React from "react";
import * as MaterialUI from "@material-ui/core";
import { translate } from "./translate";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    verticalLine: {
      position: "absolute",
      borderTop: "1px solid blue",
      opacity: 0.3,
      width: props => props.w,
      transform: props => translate(0, props.y)
    }
  };
});

const HorizontalLine = props => {
  const { y, w } = props;
  const classes = useStyles({ y, w });
  return <div className={classes.verticalLine}></div>;
};

export default HorizontalLine;
