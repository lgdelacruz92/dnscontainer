import React from "react";
import * as MaterialUI from "@material-ui/core";
import clsx from "clsx";
import { translate } from "../utils/translate";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    rectinfo: {
      width: 70,
      height: 10,
      opacity: 0.7,
      zIndex: 5,
      background: "black",
      borderRadius: 5,
      transform: props => translate(props.x, props.y - 20),
      color: "white",
      fontSize: "0.5em",
      padding: 5,
      textAlign: "center",
      position: "absolute"
    }
  };
});

const RectInfo = props => {
  const { data, open } = props;
  const classes = useStyles(data);

  return (
    <div
      className={clsx(classes.rectinfo)}
      hidden={!open}
    >{`w: ${data.w.toPrecision(4)} h: ${data.h.toPrecision(4)}`}</div>
  );
};

export default RectInfo;
