import babel from "rollup-plugin-babel";

export default [
  {
    input: "src/dnscontainer/index.js",
    output: {
      name: "dnscontainer",
      file: "dist/index.js",
      format: "es"
    },
    external: ["react"],
    plugins: [
      babel({
        exclude: "node_modules/.**"
      })
    ]
  }
];
