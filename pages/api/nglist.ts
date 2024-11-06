import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { items } = req.body;

    // ここでデータベースにデータを保存する処理を追加
    console.log('受信したデータ:', items);

    res.status(200).json({ message: 'データが正常に送信されました' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}