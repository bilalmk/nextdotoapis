import { deleteTodo } from "./list";
import type { NextApiRequest, NextApiResponse } from "next";
//import initMiddleware from "@/lib/init-middleware";
import initMiddleware from "@/lib/new-middleware";
import Cors from "cors";

//new cors implemented
// const cors = initMiddleware(
//   Cors({
//     methods: ["GET", "HEAD", "DELETE"],
//   })
// );

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //await cors(req, res);
  await initMiddleware(req,res);

  if (req.method === "DELETE") {
    let { id } = req.query;

    if (id !== undefined && id) deleteTodo(id.toString());

    res.status(200).json({ msg: "todo deleted successfully" });
  } else {
    res.status(400).json({ msg: "invalid request method" });
  }
}
