import {addTodo} from "./list";
import type { NextApiResponse, NextApiRequest } from "next";
import initMiddleware from "@/lib/new-middleware";

//import initMiddleware from "@/lib/init-middleware";
//import Cors from "cors";


// const cors = initMiddleware(Cors({
//     methods: ['GET', 'HEAD'],
//   }));

export default async function handler(req:NextApiRequest,res:NextApiResponse)
{
    await initMiddleware(req,res);
    //await cors(req, res);
    
    if(req.method==="POST"){
        let {name}:{name:string} = req.body;
        addTodo(name);
        res.status(200).json({msg:"todo added successfully"});
    }
    else
    {
        res.status(400).json({msg:"invalid request method"});
    }
};