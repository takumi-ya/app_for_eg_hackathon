import type { NextApiRequest, NextApiResponse } from 'next';

const users = [
  {email: 'apple', password: 'swift',username:'Appleさん'},
]

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    console.log('リクエスト受信:', req.body);
    
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      res.status(200).json({ message: 'ログイン成功', user});
    } else {
      res.status(401).json({ message: 'ユーザー名またはパスワードが間違っています' });
    }
    // try {
    //   const response = await fetch('API', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ username, password }),
    //   });

    //   if (!response.ok) {
    //     throw new Error('ログインに失敗しました');
    //   }

    //   const data = await response.json();
    //   res.status(200).json(data);
    // } catch (error) {
    //   if (error instanceof Error) {
    //     res.status(500).json({ message: error.message });
    //   } else {
    //     res.status(500).json({ message: '予期しないエラーが発生しました' });
    //   }
    // }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}