require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.static("public"));

const UI_API_ENDPOINT = "/graphql";
const env = { UI_API_ENDPOINT };
app.get("/env.js", function (req, res) {
  res.send(`window.ENV = ${JSON.stringify(env)}`);
});

const enableHMR = (process.env.ENABLE_HMR || "true") === "true";
if (enableHMR && process.env.NODE_ENV !== "production") {
  console.log("Adding dev middleware, enabling HMR");
  /* eslint "global-require": "off" */
  /* eslint "import/no-extraneous-dependencies": "off" */
  const webpack = require("webpack");
  const devMiddleware = require("webpack-dev-middleware");
  const hotMiddleware = require("webpack-hot-middleware");
  const config = require("./webpack.config.js");
  config.entry.app.push("webpack-hot-middleware/client");
  config.plugins = config.plugins || [];
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  const compiler = webpack(config);
  app.use(devMiddleware(compiler));
  app.use(hotMiddleware(compiler));
}

const port = process.env.UI_SERVER_PORT || 8000;

app.listen(port, function () {
  console.log(`UI started on port ${port}`);
});
