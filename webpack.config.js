//webpack run with nodeJs therefore the sintaxt used in this file
//uses node way to import or export function

const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "assets", "script"),
  },
};
