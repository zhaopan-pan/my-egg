module.exports = {
    egg: true,
    framework: 'react', // 使用 easywebpack-react 构建解决方案
    entry: {
        app: 'app/web/page/app/index.js',
        list: 'app/web/page/list/index.jsx'
    },
    dll: ['react', 'react-dom'], // webpack dll 构建
    loaders: {},
    plugins: {},
    done() { // 编译完成回调

    }
};