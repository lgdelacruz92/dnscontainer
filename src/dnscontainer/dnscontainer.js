import React from "react";
import * as MaterialUI from "@material-ui/core";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    container: {
      width: props => props.width,
      height: props => props.height,
      position: "relative",
      overflow: "hidden",
      background: "white",
      boxShadow: "2px 2px 4px grey"
    }
  };
});

const DNSContainer = React.forwardRef((props, ref) => {
  let { width, height } = props;
  if (!width || !height) {
    width = 500;
    height = 500;
  }

  const classes = useStyles({ width: width, height: height });

  return (
    <div ref={ref} className={classes.container}>
      {props.children}
    </div>
  );
});

export default DNSContainer;
