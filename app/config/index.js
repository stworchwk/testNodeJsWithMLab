const app = {
  db: {
    host: "ds253468.mlab.com",
    port: 53468,
    name: "server",
    username: "stworchwk",
    password: "Schnkkpch221036"
  },
  jwt: {
    APP_SECRET: "ILOVEYOU",
    EXPIRE_IN: "7d"
  }
};

export const database = app.db;
export default app;
