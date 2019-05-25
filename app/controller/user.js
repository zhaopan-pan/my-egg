'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async add() {
        this.ctx.body = this.ctx.service.user.add();
    }
    async getUserlist() {
        console.log("****-");
        console.log(this.ctx.service.user.userlist());
        this.ctx.body =await this.ctx.service.user.userlist();
    }
}

module.exports = UserController;
