import pg from 'pg';
const Pool = pg.Pool;
require('dotenv').config();

const dbPort = Number(process.env.DBPORT || 5432);

  const pool = new Pool({
  user: process.env.DB_USERNAME || 'localhost',
  host: process.env.HOST || '127.0.0.1',
  database:process.env.DATABASE || 'plugins',
  password: process.env.PASS || 'plugins',
  port: dbPort  
  }); 
   
  pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err)
    process.exit(-1)
  })

  pool.connect( (err : any, connection:any) => {
      if (err) throw err;
      console.log('Database is connected successfully !');
      connection.release();
    }); 
    
  export default pool; 