const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/test",
    createProxyMiddleware({
      target: "https://api-dmtm-nonprod.axa-id.intraxa",
      changeOrigin: true,
      logLevel: "debug",
    })
  );
};