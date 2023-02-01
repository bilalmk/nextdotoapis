import Cors from 'cors';
import type { NextApiResponse, NextApiRequest } from "next";

    const cors = Cors({
      methods: ['GET', 'HEAD', 'POST','DELETE', 'PUT', 'PATCH']
    })

    function runMiddleware(req:NextApiRequest, res:NextApiResponse, fn:any) {
        return new Promise((resolve, reject) => {
          fn(req, res, (result:any) => {
            if (result instanceof Error) {
              return reject(result);
            }
            return resolve(result);
          });
        });
      }

export default async function MiddlewinitMiddleware(req:NextApiRequest, res:NextApiResponse)
{
    await runMiddleware(req, res, cors)
}