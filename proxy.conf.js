const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'http://localhost:1234',
    secure: true,
    changeOrigin: true,
    logLeve: 'debug',
    pathRewrite: { '^/api': '' },
  },
];

module.exports = PROXY_CONFIG;
