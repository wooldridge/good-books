const config = {};

config.project = {
  name: "good-books"
};

config.path = "/PATH/TO/good-books/"; // include trailing "/"

config.auth = {
  user: 'USERNAME',
  pass: 'PASSWORD',
  sendImmediately: false
};

config.host = "localhost";

config.databases = {
  content: {
    name: config.project.name + "-content"
  },
  modules: {
    name: config.project.name + "-modules"
  },
};

config.rest = {
  "rest-api": {
    name: config.project.name + "-rest",
    database: config.databases.content.name,
    "modules-database": config.databases.modules.name,
    port: 8099,
    "error-format": "json"
  }
};

config.xdbc = {
  "server-name": config.project.name + "-xdbc",
  "server-type": "xdbc",
  "group-name": "Default",
  "content-database": config.databases.content.name,
  root: "/",
  port: 8006
};

config.entityType = "book";

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = config;
}
