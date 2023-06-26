// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}

// /github 엔드포인트로 프로필 요청
// localhost/3000/api/파일명으로 접근하면 핸들러 작동해서 데이터 받아옴