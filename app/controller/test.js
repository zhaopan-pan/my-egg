'use strict';

const Controller = require('egg').Controller;

class TestController extends Controller {
  async test() {
    const { ctx } = this;
    ctx.body = { name: `${ctx.params.id}` };
  }

}

module.exports = TestController;
