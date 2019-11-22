import React from "react";
import "./App.css";
import DNSContainer from "./dnscontainer";
import { collectSiblings } from "./dnscontainer/utils/siblingscollector";
import { imageData, imageData2, text } from "./dnscontainer/data";
import Content from "./dnscontainer/content";
import VerticalLine from "./dnscontainer/verticalline";
import HorizontalLine from "./dnscontainer/horizontalline";
import {
  isLeftAligned,
  isRightAligned,
  isHorizontallyCentered
} from "./dnscontainer/utils/siblingliner";
import { drawLineVert } from "./dnscontainer/linedrawer";

function App() {
  const containerRef = React.useRef();
  const contentsRef = React.useRef([]);
  const leftLineRef = React.useRef();
  const rightLineRef = React.useRef();
  const topLineRef = React.useRef();
  const horiLineRef = React.useRef();

  const datas = [imageData, text, imageData2];
  if (datas.length !== contentsRef.current.length) {
    datas.forEach(d => contentsRef.current.push(React.createRef()));
  }

  return (
    <div className="App">
      <button
        onClick={() => {
          console.log(contentsRef.current, "The contents");
        }}
      >
        Click
      </button>
      <DNSContainer ref={containerRef} width={500} height={700}>
        {datas.map((data, i) => (
          <Content
            ref={contentsRef.current[i]}
            key={data.id}
            data={data}
            containerRef={containerRef}
            onChange={targetId => {
              const children = contentsRef.current.map(c => c.current);
              const target = children.find(d => d.id === targetId);
              const siblings = collectSiblings(target, children);
              siblings.forEach(sibling => {
                drawLineVert(
                  isLeftAligned,
                  target,
                  sibling,
                  leftLineRef,
                  target.x
                );
                drawLineVert(
                  isHorizontallyCentered,
                  target,
                  sibling,
                  horiLineRef,
                  (target.x * 2 + target.w) / 2
                );
                drawLineVert(
                  isRightAligned,
                  target,
                  sibling,
                  rightLineRef,
                  target.x + target.w
                );
              });
            }}
            onChangeEnd={() => {}}
          />
        ))}
        <VerticalLine ref={leftLineRef} />
        <VerticalLine ref={rightLineRef} />
        <VerticalLine ref={horiLineRef} />
        <HorizontalLine ref={topLineRef} />
      </DNSContainer>
    </div>
  );
}

export default App;
