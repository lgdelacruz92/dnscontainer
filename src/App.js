import React from "react";
import "./App.css";
import DNSContainer from "./dnscontainer";
import DNSImage from "./dnscontainer/dnsimage";
import { imageData } from "./dnscontainer/data";

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
      </DNSContainer>
    </div>
  );
}

export default App;
