import React from "react";
import "./App.css";
import DNSContainer, { DNSText, DNSImage } from "./dnscontainer";
import { imageData, imageData2, text } from "./dnscontainer/data";

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
        <DNSImage
          data={imageData2}
          onChangeEnd={newImageData => {
            console.log("new image data 2");
          }}
          onRemove={() => {}}
        />
        <DNSText
          data={text}
          onChangeEnd={newTextData => {}}
          onRemove={() => {}}
        />
      </DNSContainer>
    </div>
  );
}

export default App;
