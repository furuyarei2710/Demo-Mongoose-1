// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import connectMongo from "../../../config/dbConnect";

import clientPromise from '../../../config/dbConnect';
import { putUser } from '../../../controller/controller';
import User from '../../../models/User';
import mongoose from '../../../utils/mongoose'
import main from '../../../config/dbConnect';

main ();

export default async function handler (req, res)  {
  try{
    const user = await User.create(req.body);
    res.redirect('/');
    if(!user){
      return res.json({code: 'User not created'});
    }
  } catch (error) {
    res.status(400).json({status: 'Not able to create user'});
  }
}