//七牛文件上传前缀，使用时间戳作为文件上传前缀

let date = new Date();

date.setSeconds(0);

date.setMinutes(0);

date.setMilliseconds(0);

date.setHours(0);

const time = date.getTime();

module.exports = {
  prefix: 'ch-web-static/' + time + '/',
};
