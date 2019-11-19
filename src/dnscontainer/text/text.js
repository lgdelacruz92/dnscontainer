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
  const { textData } = props;
  const classes = useStyles(textData);
  const textDNSRef = React.useRef();

  React.useEffect(() => {
    // function onTextClick(e) {
    //   textDNSRef.current.focus();
    //   e.preventDefault();
    //   e.stopPropagation();
    // }
    // const onDocumentClick = e => {
    //   textDNSRef.current.blur();
    //   console.log("Clicked outside");
    //   e.preventDefault();
    //   e.stopPropagation();
    // };
    // if (textDNSRef.current) {
    //   textDNSRef.current.addEventListener("click", onTextClick);
    //   document.addEventListener("click", onDocumentClick);
    // }
    // return () => {
    //   textDNSRef.current.removeEventListener("click", onTextClick);
    //   document.removeEventListener("click", onDocumentClick);
    // };
  }, []);
  return (
    <div className={classes.text}>
      <TextDNS textData={textData} ref={textDNSRef} onUpdate={() => {}} />
    </div>
  );
};

export default Text;
