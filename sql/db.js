const postgres = require('postgres');

let sqlInstance;

const getSqlInstance = () => {
  if (!sqlInstance) {
    sqlInstance = postgres('postgres://user_42ek5yp4z:p42ek5yp4z@ocdb.app:5052/db_42ek5yp4z', {
      host: 'ocdb.app',
      port: 5052,
      database: 'db_42ek5yp4z',
      username: 'user_42ek5yp4z',
      password: 'p42ek5yp4z',
    });
  }
  return sqlInstance;
};

module.exports = getSqlInstance;