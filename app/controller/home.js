'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg!index';
  }
  async main() {
    const { ctx } = this;
    ctx.body = 'mian';
  }
}
class HomeControllers extends HomeController {
  async indexs() {
    const { ctx } = this;
    ctx.body = 'hi, egg!indexss';
  }
  async mains() {
    const { ctx } = this;
    ctx.body = 'mian';
  }

  async server() {
    const { ctx } = this;
    await ctx.render('list.js', { message: 'egg react server side render' });
  }
}

// const home = { HomeController, HomeControllers };
module.exports = HomeControllers;
// exports.HomeController = HomeController;
// exports.HomeControllers = HomeControllers;
