import React from "react";
import * as MaterialUI from "@material-ui/core";
import TextDNS from "react-editable-and-draggable-text-2";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    text: {
      position: "absolute",
      zIndex: props => props.index
    }
  };
});

const Text = props => {
  const { data } = props;
  const classes = useStyles(data);
  const textDNSRef = React.useRef();

  return (
    <div className={classes.text}>
      <TextDNS textData={data} ref={textDNSRef} onUpdate={() => {}} />
    </div>
  );
};

export default Text;
