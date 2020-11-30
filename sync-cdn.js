const path = require('path');
const Promise = require('bluebird');
const childProcessExec = Promise.promisify(require('child_process').exec);
// 服务器地址
const SERVER_PATH = 'root@8.129.231.174:/server/static';
// 编译输出目录
const DIST_PATH = path.join(__dirname, 'dist');

console.time('sync time');

childProcessExec(`rsync -Rr . ${SERVER_PATH}`, { cwd: DIST_PATH }).then(() => {
    console.info('sync cdn success~');
    console.timeEnd('sync time');
});