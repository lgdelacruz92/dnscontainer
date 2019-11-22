import React from "react";
import "./App.css";
import DNSContainer from "./dnscontainer";

import { imageData, imageData2, text } from "./dnscontainer/data";
import Content from "./dnscontainer/content";

function App() {
  const containerRef = React.useRef();
  const contentsRef = React.useRef([]);

  return (
    <div className="App">
      <DNSContainer ref={containerRef} width={500} height={700}>
        {[imageData, imageData2, text].map((data, i) => (
          <Content
            ref={contentsRef.current[i]}
            key={data.id}
            data={data}
            containerRef={containerRef}
            onChange={data => {}}
            onChangeEnd={() => {}}
          />
        ))}
      </DNSContainer>
    </div>
  );
}

export default App;
