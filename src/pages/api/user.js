

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'GET') {
    try {
      const users = await prisma.user.findMany();
      res.status(200).json({data: users});
    } catch {
      res.status(500).json({
        message: "error"
      });
    }
  } 
 
}
