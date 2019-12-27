'use strict';

const Controller = require('egg').Controller;

// 定义创建接口的请求参数规则
const userObjRule = {
    userName: 'string',
    passWord: 'string',
};
class UserController extends Controller {
    async add() {
        const { ctx } = this;
        const user = ctx.request.body;
        // 校验 `ctx.request.body` 是否符合我们预期的格式
        // 如果参数校验未通过，将会抛出一个 status = 422 的异常
        const validateResult = ctx.validate(userObjRule, user);
        console.log("validateResult", validateResult);
        this.ctx.body = await this.ctx.service.user.add(user);
    }
    async getUserlist() {
        console.log("****-getUserlist");
        this.ctx.body = await this.ctx.service.user.userlist();
    }
}

module.exports = UserController;
