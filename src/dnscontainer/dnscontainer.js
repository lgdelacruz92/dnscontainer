import React from "react";
import * as MaterialUI from "@material-ui/core";
import Content from "./content";
import VerticalLine from "./verticalline";
import HorizontalLine from "./horizontalline";

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

const DNSContainer = props => {
  let { width, height } = props;
  if (!width || !height) {
    width = 500;
    height = 500;
  }

  const classes = useStyles({ width: width, height: height });
  const containerRef = React.useRef();
  const contentsRef = React.useRef([]);
  const leftLineRef = React.useRef();
  const rightLineRef = React.useRef();
  const topLineRef = React.useRef();
  const bottomLineRef = React.useRef();
  const horiLineRef = React.useRef();
  const vertLineRef = React.useRef();

  const datas = [];
  const onChangeEndEvents = {};
  if (props.children.constructor === [].constructor) {
    props.children.forEach(d => {
      datas.push(d.props.data);
      onChangeEndEvents[d.props.data.id] = d.props.onChangeEnd;
      contentsRef.current.push(React.createRef());
    });
  } else if (props.children.constructor === {}.constructor) {
    datas.push(props.children.props.data);
    contentsRef.current.push(React.createRef());
    onChangeEndEvents[props.children.props.data.id] =
      props.children.props.onChangeEnd;
  }

  return (
    <div
      ref={containerRef}
      className={classes.container}
      onMouseUp={() => {
        leftLineRef.current.setAttribute("style", "");
        rightLineRef.current.setAttribute("style", "");
        topLineRef.current.setAttribute("style", "");
        bottomLineRef.current.setAttribute("style", "");
        horiLineRef.current.setAttribute("style", "");
        vertLineRef.current.setAttribute("style", "");
      }}
    >
      {datas.map((data, i) => (
        <Content
          ref={contentsRef.current[i]}
          key={data.id}
          data={data}
          leftLineRef={leftLineRef}
          rightLineRef={rightLineRef}
          topLineRef={topLineRef}
          bottomLineRef={bottomLineRef}
          vertLineRef={vertLineRef}
          horiLineRef={horiLineRef}
          containerRef={containerRef}
          contentsRef={contentsRef}
          onChangeEnd={(e, realData) => {
            const onChangeEnd = onChangeEndEvents[realData.id];
            onChangeEnd(realData);
          }}
        />
      ))}
      <VerticalLine ref={leftLineRef} />
      <VerticalLine ref={rightLineRef} />
      <VerticalLine ref={horiLineRef} />
      <HorizontalLine ref={topLineRef} />
      <HorizontalLine ref={bottomLineRef} />
      <HorizontalLine ref={vertLineRef} />
    </div>
  );
};

export default DNSContainer;
