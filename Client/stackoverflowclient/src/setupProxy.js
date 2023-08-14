const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/coffeeTime',
    createProxyMiddleware({
      target: 'https://2302-221-150-55-48.ngrok-free.app', //서버 URL or localhost:설정한포트번호
      changeOrigin: true,
    }),
  );
};
