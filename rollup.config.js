import babel from "rollup-plugin-babel";

export default [
  {
    input: "src/dnscontainer/index.js",
    output: {
      name: "dnscontainer",
      file: "dist/index.js",
      format: "es"
    },
    external: [
      "react",
      "@material-ui/core",
      "clsx",
      "react-editable-and-draggable-text-2",
      "react-image-drag-and-scale",
      "@material-ui/icons"
    ],
    plugins: [
      babel({
        exclude: "node_modules/.**"
      })
    ]
  }
];
