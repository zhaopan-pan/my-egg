配置mogosse
1、npm install mongoose --save


2、测试连接是否成功,前提是你已经按照好了mongodb

const mongoose = require('mongoose');
mongoose.connect('mongodb://132.232.87.95:27017/test');
const con = mongoose.connection;
con.on('error', console.error.bind(console, '连接数据库失败'));
con.once('open', () => {
  console.log('连接成功');
});

3、配置

// config/plugin.js
exports.mongoose = {
    enable: true,
    package: 'egg-mongoose',
};
// config/config.default.js
config.mongoose = {
    url: 'mongodb://你的mongodb地址/apiExample', 如果有密码验证的话按照此格式 mongodb://用户名:密码@127.0.0.1/库名
    options: {},
};
