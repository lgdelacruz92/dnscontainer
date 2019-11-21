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
  const { width, height } = props;
  if (!width || !height) {
    throw Error("Width, height, and imageDatas array is required");
  }

  const containerRef = React.useRef();
  const classes = useStyles(props);

  return (
    <div ref={containerRef} className={classes.container}>
      {props.children}
    </div>
  );
});

export default DNSContainer;
