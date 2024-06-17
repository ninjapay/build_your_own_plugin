import express from 'express';
import apiRouter from "./api/index";
import { Express } from 'express';
import cors from 'cors';

export default function (app: Express) {

  app.use(express.json({limit: '50mb'}));
  app.use(express.urlencoded({
    extended: true,
    limit: "15mb"
  }));

  app.set('views', __dirname + '/views');

  app.set('view engine', 'hbs')

  app.use(cors());


/// define your views here

  app.use('/plugins/api/v1', apiRouter);


  app.use('*', (req, res) => {
    res.status(404).json({
      status: "false",
      data: null,
      message: 'Resource not available !'
    });
  });


  app.use((err: any, req: any, res: any, next: any) => {
    if (res.headersSent) {
      return next(err);
    }
    console.error(err);
    return res.status(500).json({
      error: true,
      message: "Unexpected Error Occurred. " + err.message
    });

  });


};

