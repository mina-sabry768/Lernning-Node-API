const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const db_config = {
    connectionString: process.env.DATABASE_URL,
    connectionTimeoutMillis: number,
    idleTimeoutMillis: 200,
    max: 20,
    allowExitOnIdle: true
  }

  const pool = new pool({db_config});

  pool.on('connect', (client) => {
    console.log('DataBase Connect');
    //client.query('dataBase Is connecting');
  });

  pool.on('remove', (client) => {
    console.log('DataBase is Connect remove');
 
  });
  
  module.exports = pool;    