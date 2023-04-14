// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // 发起 GET 请求
  axios
    .get(
      "https://www.xungcloud.com/api/v5/market/mark-price-candles?instId=BTC-USD-SWAP&&bar=1M&&limit=5"
    )
    .then((response) => res.status(200).json(response.data));
}
