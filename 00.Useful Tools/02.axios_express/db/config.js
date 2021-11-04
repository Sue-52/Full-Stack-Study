module.exports.config = {
  // 开发环境
  DEV: {
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "xxxxxx",
  },
  // 生产环境
  PRD: {
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "root",
    database: "xxxxxx",
  },
  // 测试环境
  UAT: {
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "root",
    database: "xxxxxx",
  },
};
