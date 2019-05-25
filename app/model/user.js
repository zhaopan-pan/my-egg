'use strict';
// {app_root}/app/model/user.js
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    // const conn = app.mongooseDB.get('db1');
    const UserSchema = new Schema({
        userName: { type: String },
        password: { type: String },
    });

    return mongoose.model('user', UserSchema,'user');
};

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://root:123456@127.0.0.1/admin');
// const con = mongoose.connection;
// con.on('error', console.error.bind(console, '连接数据库失败'));
// con.once('open', () => {
//     console.log('连接成功');
// });