import React from "react";
import * as MaterialUI from "@material-ui/core";
import Rectangle from "./rectangle";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    container: {
      width: 500,
      height: 500,
      position: "relative",
      border: "2px solid red"
    },
    rect: {
      position: "absolute",
      border: "1px solid blue"
    },
    vertLine: {
      border: "1px solid black",
      width: 500,
      position: "absolute",
      background: "black"
    }
  };
});

const DNSContainer = props => {
  const classes = useStyles();
  const { rects } = props;
  const [vertLines, setVertlines] = React.useState(new Set([]));

  React.useEffect(() => {
    rects.forEach(rect1 => {
      rects.forEach(rect2 => {
        if (rect1 !== rect2) {
          const r1 = new Rectangle(rect1);
          const r2 = new Rectangle(rect2);
          if (r1.isVerticallyCentered(r2)) {
            if (!vertLines.has(r1.centerY())) {
              vertLines.add(r1.centerY());
              setVertlines(new Set(vertLines));
            }
          }
        }
      });
    });
  }, [vertLines]);

  return (
    <div className={classes.container}>
      {rects.map((rect, i) => {
        return (
          <div
            key={i}
            className={classes.rect}
            style={{
              width: rect.width,
              height: rect.height,
              transform: `translate(${rect.x}px, ${rect.y}px)`
            }}
          />
        );
      })}
      {[...vertLines].map((line, i) => {
        return (
          <div
            className={classes.vertLine}
            style={{ transform: `translate(0px, ${line}px)` }}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default DNSContainer;
