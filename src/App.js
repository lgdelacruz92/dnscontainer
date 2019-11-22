import React from "react";
import "./App.css";
import DNSContainer from "./dnscontainer";
import Image from "./dnscontainer/image/image";
import Text from "./dnscontainer/text/text";
import { imageData, imageData2, text } from "./dnscontainer/data";

function App() {
  const containerRef = React.useRef();

  return (
    <div className="App">
      <DNSContainer ref={containerRef} width={500} height={700}>
        {[imageData, imageData2, text].map(data => {
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
          } else if (data.type === "text") {
            return <Text data={data} key={data.id} onChange={data => {}} />;
          } else {
            return null;
          }
        })}
      </DNSContainer>
    </div>
  );
}

export default App;
