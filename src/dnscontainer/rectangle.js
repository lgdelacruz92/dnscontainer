import React from "react";
import * as MaterialUI from "@material-ui/core";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    rectangle: {}
  };
});

const Rectangle = React.forwardRef((props, ref) => {
  const classes = useStyles();
  return <div ref={ref} className={classes.rectangle}></div>;
});

export default Rectangle;
