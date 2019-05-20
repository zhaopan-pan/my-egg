'use strict';

const Controller = require('egg').Controller;

class TestController extends Controller {
  async test() {
    const { ctx } = this;
    ctx.body = 'test';
  }

}

module.exports = TestController;
