import React from "react";
import "./App.css";
import DNSContainer from "./dnscontainer";
import Image from "./dnscontainer/image/image";
import { imageData } from "./dnscontainer/data";

function App() {
  const containerRef = React.useRef();
  return (
    <div className="App">
      <DNSContainer ref={containerRef} width={500} height={700}>
        <Image
          containerRef={containerRef}
          onChange={newImageData => {
            console.log("image updated", newImageData);
          }}
          onClick={() => {
            console.log("Clicked");
          }}
          data={imageData}
        />
      </DNSContainer>
    </div>
  );
}

export default App;
