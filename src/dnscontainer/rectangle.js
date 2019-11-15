import React from "react";
import * as MaterialUI from "@material-ui/core";
import clsx from "clsx";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    rectangle: {}
  };
});

const Rectangle = React.forwardRef((props, ref) => {
  const { id, onMouseMove } = props;
  const classes = useStyles();
  const [state, setState] = React.useState({
    status: "mouseup"
  });

  React.useEffect(() => {
    const onMouseDown = e => {
      if (state.status !== "mouseup" && e.target.classList.contains(id)) {
        console.log("clicked");
        setState({ ...state, status: "mousedown" });
      }
      e.preventDefault();
    };
    const onMouseMoveHere = e => {
      if (state.status === "mousedown") {
        onMouseMove();
      }
      e.preventDefault();
    };
    const onMouseUp = e => {
      if (state.status === "mousedown") {
        setState({ ...state, status: "mousedown" });
      }
    };
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousemove", onMouseMoveHere);
    document.addEventListener("mousedown", onMouseDown);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mousemove", onMouseMoveHere);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, [state.status]);
  return (
    <div ref={ref} className={clsx(classes.rectangle, id)}>
      {props.children}
    </div>
  );
});

export default Rectangle;
