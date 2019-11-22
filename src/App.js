import React from "react";
import "./App.css";
import DNSContainer from "./dnscontainer";
import { imageData, imageData2, text } from "./dnscontainer/data";
import ImageContent from "./dnscontainer/content";
import VerticalLine from "./dnscontainer/verticalline";
import HorizontalLine from "./dnscontainer/horizontalline";

function App() {
  const containerRef = React.useRef();
  const contentsRef = React.useRef([]);
  const leftLineRef = React.useRef();
  const rightLineRef = React.useRef();
  const topLineRef = React.useRef();
  const bottomLineRef = React.useRef();
  const horiLineRef = React.useRef();
  const vertLineRef = React.useRef();

  const datas = [imageData, text, imageData2];
  if (datas.length !== contentsRef.current.length) {
    datas.forEach(d => contentsRef.current.push(React.createRef()));
  }

  return (
    <div
      className="App"
      onMouseUp={() => {
        leftLineRef.current.setAttribute("style", "");
        rightLineRef.current.setAttribute("style", "");
        topLineRef.current.setAttribute("style", "");
        bottomLineRef.current.setAttribute("style", "");
        horiLineRef.current.setAttribute("style", "");
        vertLineRef.current.setAttribute("style", "");
      }}
    >
      <button
        onClick={() => {
          console.log(contentsRef.current, "The contents");
        }}
      >
        Click
      </button>
      <DNSContainer ref={containerRef} width={500} height={700}>
        {datas.map((data, i) => (
          <ImageContent
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
              console.log("my real data changed", realData);
            }}
          />
        ))}
        <VerticalLine ref={leftLineRef} />
        <VerticalLine ref={rightLineRef} />
        <VerticalLine ref={horiLineRef} />
        <HorizontalLine ref={topLineRef} />
        <HorizontalLine ref={bottomLineRef} />
        <HorizontalLine ref={vertLineRef} />
      </DNSContainer>
    </div>
  );
}

export default App;
