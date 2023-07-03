import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export async function GET(req: NextApiRequest, res: NextApiResponse<Data>) {
  return new Response('dd');
}
