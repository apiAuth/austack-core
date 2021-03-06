'use strict';

process.env.AUSTACK_DATABASE_URL = process.env.AUSTACK_DATABASE_URL || 'mongodb://peter:Be8s2fsisOdWy@115.28.162.221:27088/austackdb';

module.exports = {

  corsOptions: {
    origin: 'http://console-stg.austack.com'
  },

  ip: process.env.AUSTACK_SYS_IP || undefined,

  port: process.env.AUSTACK_SYS_PORT || 9888,

  publicDir: 'server/public',

  logLevel: 'log',

  mongo: {
    uri: process.env.AUSTACK_DATABASE_URL,
    options: {
      server: {
        auto_reconnect: true,
        poolSize: 4,
        socketOptions: {
          keepAlive: 1
        }
      }
    }
  },

  apiBaseURL: 'http://api-stg.austack.com/api',

  seedDB: true
};