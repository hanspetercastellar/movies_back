"use strict";

var conf = {
  development: {
    username: "yaCbkgZd1K",
    password: "ghGb7TU3bX",
    database: "yaCbkgZd1K",
    host: "remotemysql.com",
    dialect: "mysql",
    port: 3306,
    dialectOptions: {
      bigNumberStrings: true
    },
    // Use a different storage. Default: none
    seederStorage: "json",
    // Use a different file name. Default: sequelize-data.json
    seederStoragePath: "sequelizeData.json",
    // Use a different table name. Default: SequelizeData
    seederStorageTableName: "sequelize_dat"
  },
  test: {
    username: " process.env.CI_DB_USERNAME",
    password: "process.env.CI_DB_PASSWORD",
    database: "process.env.CI_DB_NAME",
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
      bigNumberStrings: true
    }
  } // production: {
  //   username: "process.env.PROD_DB_USERNAME",
  //   password: "process.env.PROD_DB_PASSWORD",
  //   database: "process.env.PROD_DB_NAME",
  //   host: "process.env.PROD_DB_HOSTNAME",
  //   port: "process.env.PROD_DB_PORT",
  //   dialect: 'mysql',
  //   dialectOptions: {
  //     bigNumberStrings: true,
  //     ssl: {
  //       ca: fs.readFileSync(__dirname + '/mysql-ca-master.crt')
  //     }
  //   }
  // }

};
module.exports = conf;