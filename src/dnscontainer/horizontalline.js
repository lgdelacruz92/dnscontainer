import React from "react";
import * as MaterialUI from "@material-ui/core";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    horizontalLine: {
      position: "absolute",
      borderTop: "2px solid orange",
      width: "100%",
      height: 1,
      zIndex: 400,
      display: "none"
    }
  };
});

const HorizontalLine = React.forwardRef((props, ref) => {
  const classes = useStyles();
  return <div ref={ref} className={classes.horizontalLine}></div>;
});

export default HorizontalLine;
