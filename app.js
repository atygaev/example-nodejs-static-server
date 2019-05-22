const StaticServer = require('static-server');

const server = new StaticServer({
  rootPath: '.',
  port: process.env.PORT || 5000
});

server.start(() => {
  console.log(`Server listening to ${server.port}`);
});
