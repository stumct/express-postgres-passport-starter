//heroku config:get DATABASE_URL -a fast-retreat-31669
//pg.connect('postgres://gwvsdcwgncrorx:0j4dmcanrv7Id8LOaD79DsA1jL@ec2-54-246-82-77.eu-west-1.compute.amazonaws.com:5432/d7b1ptmp2c6tp', function (err, client) {
//pg.defaults.ssl = true;

var pgp = require('pg-promise')(/*options*/);

var config = {
  user: 'postgres', //env var: PGUSER
  database: 'timemgr', //env var: PGDATABASE
  password: 'password=0', //env var: PGPASSWORD
  host: 'localhost', // Server hosting the postgres database
  port: 5432, //env var: PGPORT
  //max: 10, // max number of clients in the pool
  //idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};
// alternative:
// var cn = "postgres://username:password@host:port/database";

var db = pgp(config); // database instance;
export default db
