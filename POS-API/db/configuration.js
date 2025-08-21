require("dotenv").config();
const initOptions = {};
const pgp = require('pg-promise')(initOptions);

const cn = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
};

const db = pgp(cn);

module.exports = db;