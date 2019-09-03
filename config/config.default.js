/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    bodyParser: {// 配置请求体
      jsonLimit: '10mb',
    },

  };
  // 保证构建的静态资源文件能够被访问到
  config.static = {
    prefix: '/public/',
    dir: path.join(appInfo.baseDir, 'public')
  };

  config.reactssr = {
    // renderOptions: {
    //   basedir: path.join(appInfo.baseDir, 'app/web')
    // }
    layout: path.resolve(appInfo.baseDir, 'app/web/view/layout.html')
  };
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1557755819344_7096';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // 添加 view 配置
  // exports.view = {
  //   defaultViewEngine: 'nunjucks',
  //   mapping: {
  //     '.tpl': 'nunjucks',
  //   },
  // };
  config.cluster = {
    listen: {
      path: '',
      port: 7003,
      hostname: '',
    },
  };
  // 连接mongodb
  exports.mongoose = {
    client: {
      // url: 'mongodb://root:123456@127.0.0.1/admin',
      url: 'mongodb://root:root123456@127.0.0.1/admin',
      options: {},
      // mongoose global plugins, expected a function or an array of function and options
      // plugins: [createdPlugin, [updatedPlugin, pluginOptions]],
    },
  };
  return {
    ...config,
    ...userConfig,
  };
};
