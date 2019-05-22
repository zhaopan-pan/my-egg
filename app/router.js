'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  console.log('-----------------');
  // console.log(controller.test);
  router.get('/', controller.home.index);
  router.get('/indexs', controller.home.indexs);
  router.get('/main', controller.home.main);
  router.get('/test/:id', controller.test.test);
  router.get('/list', controller.test.renderlist);
};
