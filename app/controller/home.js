'use strict';

const Controller = require('egg').Controller;
const Model = require('../mocks/article/list');
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = 'hi, egg!index';
    await ctx.render('home.js', { url: ctx.url });

  }
  async main() {
    const { ctx } = this;
    ctx.body = 'mian';
  }
}
class HomeControllers extends HomeController {
  async indexs() {
    const { ctx } = this;
    // ctx.body = 'hi, egg!indexss';
  }
  async mains() {
    const { ctx } = this;
    ctx.body = 'mian';
  }

  async server() {
    const { ctx } = this;
    await ctx.render('home.js', { message: 'egg react server side render', list: Model.getPage(1, 10) });
  }
  async list() {
    const { ctx } = this;
    await ctx.render('list.js', { message: 'egg react server list', data: Model.getPage(1, 10) });
  }
}

// const home = { HomeController, HomeControllers };
module.exports = HomeControllers;
// exports.HomeController = HomeController;
// exports.HomeControllers = HomeControllers;
