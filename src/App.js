import React from "react";
import "./App.css";
import DNSContainer, { DNSImage } from "./dnscontainer";
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
          onRemove={data => {
            console.log("Remove", data);
          }}
        />
      </DNSContainer>
    </div>
  );
}

export default App;
