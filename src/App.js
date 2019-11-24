import React from "react";
import "./App.css";
import DNSContainer from "./dnscontainer";
import DNSImage from "./dnscontainer/dnsimage";
import { imageData, imageData2 } from "./dnscontainer/data";

function App() {
  return (
    <div className="App">
      <DNSContainer width={500} height={700}>
        <DNSImage
          data={imageData}
          onChangeEnd={newImageData => {
            console.log("new image data");
          }}
        />
        <DNSImage
          data={imageData2}
          onChangeEnd={newImageData => {
            console.log("new image data 2");
          }}
        />
      </DNSContainer>
    </div>
  );
}

export default App;
