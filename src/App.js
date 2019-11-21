import React from "react";
import "./App.css";
import DNSContainer from "./dnscontainer";
import Image from "./dnscontainer/image/image";
import { imageData, imageData2 } from "./dnscontainer/data";

function App() {
  const containerRef = React.useRef();

  return (
    <div className="App">
      <DNSContainer ref={containerRef} width={500} height={700}>
        {[imageData, imageData2].map(data => {
          if (data.type === "image") {
            return (
              <Image
                key={data.id}
                containerRef={containerRef}
                onChange={newImageData => {}}
                onClick={() => {}}
                onChangeEnd={() => {}}
                data={data}
              />
            );
          } else {
            return null;
          }
        })}
      </DNSContainer>
    </div>
  );
}

export default App;
