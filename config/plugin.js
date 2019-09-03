'use strict';

/** @type Egg.EggPlugin */
// module.exports = {
// had enabled by egg
// static: {
//   enable: true,
// }

// };
// config/plugin.js
// exports.nunjucks = {
//   enable: false,
//   package: 'egg-view-nunjucks'
// };

exports.mongoose = {
  enable: true,
  package: 'egg-mongoose'
};
exports.reactssr = {
  enable: true,
  package: 'egg-view-react-ssr'
};
