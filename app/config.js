switch(process.env.NODE_ENV) {
  case "production":
    module.exports = {
      client: "mysql",
      connection: {
        database: "production",
        host:     "mysql",
        user:     "production",
        password: "production",
      },
    };
    break;
  default:
    module.exports = {
      client: "mysql",
      connection: {
        database: "app",
        host:     "mysql",
        user:     "jhead12",
        password: "test",
      },
    };
    break;
}
