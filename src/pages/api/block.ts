// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
type Data = {
  name: string;
};

const axiosInstance = axios.create({
  baseURL: "https://www.oklink.com/api/v5/explorer/blockchain",
  headers: {
    "Ok-Access-Key": "2a86b385-577c-40d4-9ccb-d6e532ee6096",
    "Content-Type": "application/json", // 请求体数据格式
  },
});

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // 发起 GET 请求
  axiosInstance
    .get("/summary")
    .then((response) => res.status(200).json(response.data));
}
