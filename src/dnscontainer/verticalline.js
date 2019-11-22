import React from "react";
import * as MaterialUI from "@material-ui/core";
const useStyles = MaterialUI.makeStyles(theme => {
  return {
    verticalLine: {
      height: "100%",
      width: 1,
      borderLeft: "2px solid orange",
      position: "absolute"
    }
  };
});

const VerticalLine = React.forwardRef((props, ref) => {
  const classes = useStyles();
  return <div ref={ref} className={classes.verticalLine}></div>;
});

export default VerticalLine;
