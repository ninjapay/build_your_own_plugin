require('dotenv').config();
import { Request, Response } from "express";
import pool from '../../db';



export const testWebhook = async (req: Request, res: Response) => {

  console.log("Test webhook", req.body);

  return res.status(200).json({
    status: false,
    data: null,
    message: "Success"
  })

}


