import {updateTodo} from "./list";
import type {NextApiRequest,NextApiResponse} from "next";
import initMiddleware from "@/lib/new-middleware";
//import Cors from "cors";

//const cors = initMiddleware(Cors({
    //methods: ['GET', 'HEAD'],
  //}));

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    //await cors(req, res);
    await initMiddleware(req,res);
    if(req.method === "POST"){
        let {id,isDone} = req.body;
        updateTodo(id,isDone);
        res.status(200).json({msg:"todo updated successfully"})
    }
    else
    {
        res.status(400).json({msg:"invalid request method"});
    }
}