// app/service/user.js
// eslint-disable-next-line strict
const Service = require('egg').Service;

class UserService extends Service {
  // 添加用户信息
  async add(user) {
    const {
      ctx,
    } = this;
    return await ctx.model.User.create(user);
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
    const result = await ctx.model.User.find({});
    console.log("service:", result);
    return result ? { "dataList": result } : { "datList": null };
  }
  async getList(id) {
    return await this.ctx.model.User.find();
  }

}
module.exports = UserService;

