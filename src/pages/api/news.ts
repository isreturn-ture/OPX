// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default function news(req: NextApiRequest, res: NextApiResponse) {
  var config = {
    method: "get",
    url: "https://m.theblockbeats.info/newsflash",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      Connection: "keep-alive",
      Accept: "*/*",
      Host: "www.theblockbeats.info",
    },
  };

  axios(config)
    .then((response: { data: any }) => {
      const rex =
        /<div class="news-flash-item-content" data-v-7a960bdc>(.*)<\/div>/gs;

      const arrdatas = rex.exec(response.data);
      const text = arrdatas?.[1].replace(/<svg.*?<\/svg>/g, "");

      const regex = /<div class="news-flash-item"[\s\S]*?<\/div>/g;
      const matches = text?.match(regex);

      const extractedData = [];
      for (let i = 0; i < 4; i++) {
        const titleRegex =
          /<a href=".*?" target="_blank" title="(.*?)" class="news-flash-item-title"/;
        const titleMatch = matches?.[i].match(titleRegex);

        const contentRegex =
          /<div class="news-flash-item-content"[\s\S]*?>([\s\S]*?)<\/div>/;
        const contentMatch = matches?.[i].match(contentRegex);

        const linkRegex =
          /<a style="color: #4065F6" href=(.*?) target="_blank">\[原文链接\]<\/a>/;
        const linkMatch = matches?.[i].match(linkRegex);

        if (
          titleMatch &&
          titleMatch.length > 1 &&
          contentMatch &&
          contentMatch.length > 1
        ) {
          const extractedItem = {
            title: titleMatch[1].trim(),
            content: contentMatch[1].trim(),
            link: linkMatch ? linkMatch[1].trim() : null,
          };
          extractedData.push(extractedItem);
        }
      }
      res.status(200).json(extractedData);
    })
    .catch(function (error: any) {
      console.log(error);
    });
}
