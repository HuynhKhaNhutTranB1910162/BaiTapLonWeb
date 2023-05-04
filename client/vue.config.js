const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: "http://localhost:5000",
  },
  // publicPath: process.env.NODE_ENV === "production" ? "/dist/" : "/",
  // base: process.env.NODE_ENV === "production" ? "/flower/" : "/",
});
