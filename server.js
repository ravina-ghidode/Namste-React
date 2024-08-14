const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

// CORS middleware for handling preflight requests
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    res.sendStatus(200); // Handle preflight requests
  } else {
    next();
  }
});

// Proxy middleware
app.use(
  "/api/swiggy",
  createProxyMiddleware({
    target: "https://www.swiggy.com",
    changeOrigin: true,
    pathRewrite: {
      "^/api/swiggy": "", // Remove '/api/swiggy' from the request path
    },
    logLevel: "debug", // Enables detailed logging
  })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
