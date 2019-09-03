module.exports = {
    egg: true,
    framework: 'react', // 使用 easywebpack-react 构建解决方案
    entry: {
        home: 'app/web/page/home/index.js', // js 文件需要自己实现 react 逻辑
        list: 'app/web/page/list/index.jsx'// 自动使用 react-entry-template-loader 模板 
    },
    dll: ['react', 'react-dom'], // webpack dll 构建
    loaders: {},
    plugins: {},
    done() { // 编译完成回调

    }
};