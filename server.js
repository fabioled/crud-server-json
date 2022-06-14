const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // base de dados no json
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000; // porta livre

server.use(middlewares);
server.use(router);

server.listen(port);