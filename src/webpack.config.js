const path = require("path");
const AssetsPlugin = require("assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: "./scripts/index.ts",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    modules: ["node_modules"],
  },
  output: {
    path: path.resolve(__dirname, "../static"),
    filename: "scripts/[name].[chunkhash].js",
  },
  plugins: [
    new AssetsPlugin({
      path: path.join(__dirname, "../data"),
      fullPath: false,
      filename: "webpack_assets.json",
      prettyPrint: true,
    }),
    new MiniCssExtractPlugin({
      path: path.resolve(__dirname, "../static"),
      filename: "styles/[name].[chunkhash].css",
    }),
  ],
};
