# DNS Container

> This library is built on top of image-drag-and-scale to provide user with a container
> that detects it's dimensions and provides grid suggestions.

[![NPM](https://img.shields.io/npm/v/image-drag-and-scale.svg)](https://www.npmjs.com/package/image-drag-and-scale) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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

```jsx
import React from "react";
import "./App.css";
import DNSContainer from "./dnscontainer/dnscontainer";

function App() {
  let imageDatas = [];
  for (let i = 0; i < 2; i++) {
    const imageData = {
      x: 20 + 10 * i,
      y: 100,
      translateX: 0,
      translateY: 0,
      scaledWidth: 100,
      scaledHeight: 100,
      width: 100,
      height: 100,
      src: "https://source.unsplash.com/random/1000x1000",
      alt: "random",
      id: `unique-${i}`,
      index: 1
    };
    imageDatas.push(imageData);
  }

  return (
    <div className="App">
      <DNSContainer width={500} height={700} imageDatas={imageDatas} />
    </div>
  );
}

export default App;
```

# Version Update

## v1.1.3

> Performance for multiple images is much better
> Tested with 40 images inside a container

# beta version v1.1.5

> This version is still being tested

## License

MIT © [lgdelacruz92](https://github.com/lgdelacruz92)
