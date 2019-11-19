const path = require("path");
const markdownMagic = require("markdown-magic");

const markdownPath = path.join(__dirname, "README.md");
markdownMagic(markdownPath, {}, () => {
  console.log("Finished updating readme!");
});

const fs = require("fs");
const packageJson = require("./package.json");

fs.readFile("./README.md", "utf-8", function(err, data) {
  if (err) throw err;

  var newValue = data.replace(
    /## v[0-9].[0-9].[0-9]/gi,
    `## v${packageJson.version}`
  );
  fs.writeFile("./README.md", newValue, "utf-8", function(err) {
    if (err) throw err;
    console.log("filelistAsync complete");
  });
});

// console.log("File module", fs, packageJson);
