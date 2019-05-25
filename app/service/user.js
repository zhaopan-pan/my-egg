// app/service/user.js
// eslint-disable-next-line strict
const Service = require('egg').Service;

class UserService extends Service {
  // 添加用户信息
  async add() {
    const {
      ctx,
    } = this;
    const result = await ctx.model.User.create({
      userName: 'zp',
      password: '123456',
    });
    return result;
  }
  async userlist() {
    const {
      ctx,
    } = this;
    // const result = await ctx.service.user.getList();
    // // return this.ctx.model.User.find().then(res => {
    // //   console.log("jieguo:", res);
    // //   return res ? { "dataList": res } : { "datList": null };
    // // });
    const result =await ctx.model.User.find({});
    console.log("service:",result);
    return result ? { "dataList": result } : { "datList": null };
  }
  async getList(id) {
    return this.ctx.model.User.find().then(res => {
      console.log("jieguo:", res);
      return res ? { "dataList": res } : { "datList": null };
    });
  }

}
module.exports = UserService;

