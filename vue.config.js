const { CDN } = process.env;
var qiniuPrefix = require('./qiniu-upload-prefix');
module.exports = {
  publicPath: CDN +  qiniuPrefix.prefix, // 对应webpack 中的 publicPath --> CDN 地址
};
