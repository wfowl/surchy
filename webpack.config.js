const path = require("path");

module.exports = function(_env, argv) {
  const isProduction = argv.mode === "production";
  const isDevelopment = !isProduction;

  return {
    target: "electron-main",
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "build.js",
      publicPath: "build/"
    },
    optimization: {
      minimize: isProduction
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          // exclude: /node_modules/,
          use: ["babel-loader"]
        }
      ]
    }
  };
};
