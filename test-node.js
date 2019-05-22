// eslint-disable-next-line strict
const http = require('http');
//test
class App {
  constructor() {
    this.handlers = {};

    this.get = this.route.bind(this, 'GET');// 把route函数绑定到App，并预设参数GET
    this.post = this.route.bind(this, 'POST');
  }

  route(method, path, handler) {
    const pathInfo = (this.handlers[path] = this.handlers[path] || {});

    // register handler
    pathInfo[method] = handler;
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
app.get('/', function (_request, response) {
  response.end('Hello World');
});

app.post('/', function (_request, response) {
  response.end('Hello World With POST');
});

app.get('/sub', function (_request, response) {
  response.end('sub page');
});

http
  .createServer(app.callback())
  .listen(8888, () => console.log('Server run as http://127.0.0.1:8888'));
