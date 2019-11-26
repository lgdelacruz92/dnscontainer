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
import DNSContainer, { DNSImage } from "./dnscontainer";
import { imageData } from "./dnscontainer/data";

function App() {
  const [data, setImageData] = React.useState(imageData);
  const [history, setHistory] = React.useState([]);
  const [historyPos, setHistoryPos] = React.useState(-1);
  React.useEffect(() => {
    let cmdClickedTime = 0;
    const onUndo = e => {
      if (e.key === "Meta") {
        cmdClickedTime = Date.now();
      }

      if (e.key === "z") {
        if (Date.now() - cmdClickedTime < 1000) {
          if (historyPos > 0) {
            setImageData({ ...history[historyPos - 1].data });
            setHistoryPos(historyPos - 1);
          }
        }
      }
    };
    document.addEventListener("keydown", onUndo);
    return () => document.removeEventListener("keydown", onUndo);
    // eslint-display-next-line
  }, [historyPos]);
  return (
    <div className="App">
      <DNSContainer width={500} height={700}>
        <DNSImage
          data={data}
          onChangeEnd={(e, newImageData) => {
            if (history.length > 10) {
              history.splice(0, 1);
            }
            if (historyPos >= 0) {
              history.splice(historyPos + 1);
            }
            history.push({ action: "data-change", data: { ...newImageData } });
            setHistoryPos(historyPos + 1);
            setHistory([...history]);
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
```
<!-- AUTO-GENERATED-CONTENT:END -->

# Version Update

## v3.0.6

> What is new?
> you can not monitor the data on update making it easier to keep data persistent

## License

MIT © [lgdelacruz92](https://github.com/lgdelacruz92)
