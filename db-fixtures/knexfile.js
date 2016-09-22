module.exports = {
  development: {
    client: "mysql",
    connection: {
      database: "app",
      host:     "mysql",
      user:     "jhead12",
      password: "test",
    },
  },
  production: {
    client: "mysql",
    connection: {
      database: "production",
      host:     "mysql",
      user:     "production",
      password: "production",
    },
  },
};
