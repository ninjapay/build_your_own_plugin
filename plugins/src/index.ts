import express from 'express';
import initRoutes from './app';
import pool from './db';


const port=  process.env.PORT || 5000;

const app = express();
 
initRoutes(app) 

app.listen(port, () => { 
 
  console.log(`Express server listening on ${port}`);
});

export default app;