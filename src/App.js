import React from "react";
import "./App.css";
import DNSContainer from "./dnscontainer";
import { collectSiblings } from "./dnscontainer/utils/siblingscollector";

import { imageData, imageData2, text } from "./dnscontainer/data";
import Content from "./dnscontainer/content";
import VerticalLine from "./dnscontainer/verticalline";

function App() {
  const containerRef = React.useRef();
  const contentsRef = React.useRef([]);
  const leftLineRef = React.useRef();

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
              const target = datas.find(d => d.id === targetId);
              const siblings = collectSiblings(target, children);
            }}
            onChangeEnd={() => {}}
          />
        ))}
        <VerticalLine ref={leftLineRef} />
        <VerticalLine />
        <VerticalLine />
      </DNSContainer>
    </div>
  );
}

export default App;
