// eslint-disable-next-line strict
const http = require('http');
// test
class App {
  constructor() {
    this.handlers = {};

    this.get = this.route.bind(this, 'GET');// 把route函数绑定到App，赋值给get并预设参数GET
    this.post = this.route.bind(this, 'POST');
  }

  route(method, path, handler) {
    const pathInfo = (this.handlers[path] = this.handlers[path] || {});// 把请求path赋值给handlers 并把handlers对象中key为当前传入path的值赋值给pathInfo
    // register handler
    pathInfo[method] = handler;// 利用对象赋值后指向原对象的规则，所以修改对象后会同步到原来的handlers
    // 以上操作也可以用下面方法代替
    // this.handlers[path] = this.handlers[path] || {};
    // this.handlers[path][method] = handler;// register handler
  }

  callback() {
    return (request, response) => {
      const { url: path, method } = request;

      this.handlers[path] && this.handlers[path][method]
        ? this.handlers[path][method](request, response)
        : response.end('404');
    };
  }
}

const app = new App();
console.log('-----------');
console.log(app);
console.log('-----------');
app.get('/', function(_request, response) {
  response.end('Hello World');
});

app.post('/', function(_request, response) {
  response.end('Hello World With POST');
});

app.get('/sub', function(_request, response) {
  response.end('sub page');
});

http
  .createServer(app.callback())
  .listen(8888, () => console.log('Server run as http://127.0.0.1:8888'));
