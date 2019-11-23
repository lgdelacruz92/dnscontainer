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
    x: 100,
    y: 100,
    fontWeight: "bold",
    text: "Hello",
    index: 0,
    type: "text"
  };

  const datas = [textData1, imageData1, imageData2];
  const dnsRef = React.useRef();

  return (
    <div className="App">
      <DNSContainer width={500} height={700} >
        <DNSImage data={imageData1}>
        <DNSImage data={imageData2}>
        <DNSText data={textData1}>
      </DNSContainer>
    </div>
  );
}

export default App;
```

<!-- AUTO-GENERATED-CONTENT:END -->

## Advance example with keeping the contents persistent using firebase

```js
import React from "react";
import "./App.css";
import DNSContainer from "./dnscontainer";
import DNSImage from "./dnscontainer/dnsimage";
import firebase from "./firebase";
import DNSText from "./dnscontainer/dnstext";

const formatToImageObj = doc => {
  return {
    alt: doc.get("alt"),
    height: doc.get("height"),
    id: doc.id,
    index: doc.get("index"),
    paperId: doc.get("paperId"),
    scaledHeight: doc.get("scaledHeight"),
    scaledWidth: doc.get("scaledWidth"),
    selected: doc.get("selected"),
    src: doc.get("src"),
    translateX: doc.get("translateX"),
    translateY: doc.get("translateY"),
    type: doc.get("type"),
    width: doc.get("width"),
    x: doc.get("x"),
    y: doc.get("y")
  };
};

const formatToTextDoc = doc => {
  return {
    color: doc.get("color"),
    fontFamily: doc.get("fontFamily"),
    fontSize: doc.get("fontSize"),
    fontStyle: doc.get("fontStyle"),
    fontWeight: doc.get("fontWeight"),
    id: doc.id,
    index: doc.get("index"),
    paperId: doc.get("paperId"),
    text: doc.get("text"),
    textAlign: doc.get("textAlign"),
    textDecoration: doc.get("textDecoration"),
    type: doc.get("type"),
    x: doc.get("x"),
    y: doc.get("y")
  };
};

function App() {
  const [datas, setDatas] = React.useState([]);
  React.useState(() => {
    firebase
      .collection("ImageContents")
      .where("paperId", "==", "psd123")
      .onSnapshot(docQuery => {
        let newDocs = [];
        if (docQuery.docs.length > 0) {
          docQuery.docs.forEach(doc => {
            const newDoc = formatToImageObj(doc);
            newDocs.push(newDoc);
          });
        }

        firebase
          .collection("TextContents")
          .where("paperId", "==", "psd123")
          .onSnapshot(docQueryText => {
            if (docQueryText.docs.length > 0) {
              docQueryText.docs.forEach(doc => {
                const newDoc = formatToTextDoc(doc);
                newDocs.push(newDoc);
              });
            }
            setDatas(newDocs);
          });
      });
  }, []);
  return (
    <div className="App">
      <button onClick={() => {}}>Click</button>
      <DNSContainer width={500} height={700}>
        {datas.map(data => {
          if (data.type === "image") {
            return (
              <DNSImage
                key={data.id}
                data={data}
                onChangeEnd={data => {
                  console.log("Updated image", data);
                }}
              />
            );
          } else if (data.type === "text") {
            return (
              <DNSText
                key={data.id}
                data={data}
                onChangeEnd={data => {
                  console.log("Text is updated", data);
                }}
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
```

# Version Update

## v3.0.0

> What is new?
> you can not monitor the data on update making it easier to keep data persistent

## License

MIT © [lgdelacruz92](https://github.com/lgdelacruz92)
