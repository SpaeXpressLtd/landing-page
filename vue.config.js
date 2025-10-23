const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/landing-page/" // Must include the trailing slash
      : "/",
  transpileDependencies: true,
});
