const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db/db.json");
const cors = require("cors");

const middlewares = jsonServer.defaults();

const corsOptions = {
  origin: 'http://seu-dominio.com', 
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, 
};

server.use(cors(corsOptions));

server.use(middlewares);
server.use(
 jsonServer.rewriter({
  "/api/*": "/$1",
 })
);
server.use(router);
server.listen(3000, () => {
 console.log("JSON Server is running");
});

module.exports = server;