# DNS Container

> This library is built on top of react-image-drag-and-scale to provide user with a container
> that detects it's dimensions and provides grid suggestions.

[![NPM](https://img.shields.io/npm/v/image-drag-and-scale.svg)](https://www.npmjs.com/package/image-drag-and-scale) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[![](https://media.giphy.com/media/RIvgoHlZbxnd4DpjTk/giphy.gif)](https://media.giphy.com/media/RIvgoHlZbxnd4DpjTk/giphy.gif)

## Install

```bash
npm install --save dns-container

# or
yarn add dns-container

# peer dependencies (install these separately)
# "@material-ui/core": "^4.6.1"
# "clsx": "^1.0.4",
# "image-drag-and-scale": "^1.1.5-beta.0"
# "prop-types": "^15.5.4"
```

## Usage

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./src/App.js) -->
<!-- The below code snippet is automatically added from ./src/App.js -->
```js
import React from "react";
import "./App.css";
import DNSContainer from "./dnscontainer";

function App() {
  const imageData1 = {
    x: 20,
    y: 100,
    translateX: 0,
    translateY: 0,
    scaledWidth: 100,
    scaledHeight: 100,
    width: 100,
    height: 100,
    src: "https://source.unsplash.com/random/1000x1000",
    alt: "random",
    id: `unique-123`,
    index: 1,
    type: "image"
  };

  const imageData2 = {
    x: 20,
    y: 100,
    translateX: 0,
    translateY: 0,
    scaledWidth: 100,
    scaledHeight: 100,
    width: 100,
    height: 100,
    src: "https://source.unsplash.com/random/1000x1000",
    alt: "random",
    id: `unique-124`,
    index: 2,
    type: "image"
  };

  const textData1 = {
    id: "id-unq-121",
    index: 0,
    type: "text"
  };

  const datas = [textData1, imageData1, imageData2];
  const dnsRef = React.useRef();

  return (
    <div className="App">
      <DNSContainer width={500} height={700} datas={datas} ref={dnsRef} />
      <button
        onClick={() => {
          console.log("Dns snapshot", dnsRef.current);
        }}
      >
        Take Snapshot
      </button>
    </div>
  );
}

export default App;
```
<!-- AUTO-GENERATED-CONTENT:END -->

# Version Update

## v1.1.9

> First release. If you find issues, please post an issue on the github

> Text support!

## License

MIT © [lgdelacruz92](https://github.com/lgdelacruz92)
