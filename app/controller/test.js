'use strict';

const Controller = require('egg').Controller;

class TestController extends Controller {
  async test() {
    const { ctx } = this;
    ctx.body = { name: `${ctx.params.id}` };
  }
  async renderlist() {
    const { ctx } = this;
    await ctx.render('news/list.html', { list: [{ title: '1', url: 'http://www.baidu.com' }, { title: '2', url: 'http://www.baidu.com' }] });
  }
}

module.exports = TestController;
