const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    ['/members/join', '/auth/login'],
    createProxyMiddleware({
      target: `${process.env.REACT_APP_API_URL}`, //서버 URL or localhost:설정한포트번호
      changeOrigin: true,
    }),
  );
};
