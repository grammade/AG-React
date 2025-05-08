const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://api-dmtm-nonprod.axa-id.intraxa/demo-pagination",
      changeOrigin: true,
      logLevel: "debug",
    })
  );
};