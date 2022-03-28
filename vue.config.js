const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "^/api": {
        target: "https://devmariokart.docker.3ie.fr/",
        changeOrigin: true,
      },
    },
  },
});
