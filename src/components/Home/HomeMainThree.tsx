import React, { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Three() {
  const [data, setData] = React.useState<any>([]);

  useEffect(() => {
    axios.get("https://opcoin.cn:6080/token/bolck").then((res) => {
      setData(res.data.data);
    });
  }, []);

  const router = useRouter();
  const gotoBlock = (adds: string): void => {
    router.push({ pathname: adds });
  };

  const Chain = [
    {
      name: "BTC",
      src: "/TokenUI/btc_logo.png",
      lastHeight: data[0]?.lastHeight,
      transactions: data[0]?.transactions,
      symbol: data[0]?.symbol,
      blocksrc: "https://www.oklink.com/cn/btc",
    },
    {
      name: "ETH",
      src: "/TokenUI/eth_logo.png",
      lastHeight: data[2]?.lastHeight,
      transactions: data[2]?.transactions,
      symbol: data[2]?.symbol,
      blocksrc: "https://www.oklink.com/cn/eth",
    },
    {
      name: "Polygon",
      src: "/TokenUI/polygon_logo.png",
      lastHeight: data[10]?.lastHeight,
      transactions: data[10]?.transactions,
      symbol: data[10]?.symbol,
      blocksrc: "https://www.oklink.com/cn/polygon",
    },
    {
      name: "BSC",
      src: "/TokenUI/bsc_logo.png",
      lastHeight: data[5]?.lastHeight,
      transactions: data[5]?.transactions,
      symbol: data[5]?.symbol,
      blocksrc: "https://www.oklink.com/cn/bsc",
    },
    {
      name: "OKC",
      src: "/TokenUI/okc_logo.png",
      lastHeight: data[3]?.lastHeight,
      transactions: data[3]?.transactions,
      symbol: data[3]?.symbol,
      blocksrc: "https://www.oklink.com/cn/okc",
    },
    {
      name: "Tron",
      src: "/TokenUI/tron_logo.png",
      lastHeight: data[9]?.lastHeight,
      transactions: data[9]?.transactions,
      symbol: data[9]?.symbol,
      blocksrc: "https://www.oklink.com/cn/tron",
    },
    {
      name: "ETHW",
      src: "/TokenUI/ethw_logo.png",
      lastHeight: data[13]?.lastHeight,
      transactions: data[13]?.transactions,
      symbol: data[13]?.symbol,
      blocksrc: "https://www.oklink.com/cn/ethw",
    },
    {
      name: "Optimism",
      src: "/TokenUI/op_logo.png",
      lastHeight: data[16]?.lastHeight,
      transactions: data[16]?.transactions,
      symbol: data[16]?.symbol,
      blocksrc: "https://www.oklink.com/cn/op",
    },
  ];
  return (
    <section className="bg-black text-white ">
      <div className="mx-auto  max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl mt-6 font-bold sm:text-4xl">
            我们关注的公链
          </h2>

          <p className="mt-4 text-gray-300">
            我们将持续关注公链的发展，为公链项目提供技术支持。
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Chain.map((item) => (
            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              onClick={() => {
                gotoBlock(item.blocksrc);
              }}
              key={item.name}
            >
              <img src={item.src} alt="" className="w-8 h-8" />

              <h2 className="mt-4 text-2xl font-bold text-white">
                {item.name}
              </h2>

              <p className="mt-1 text-sm font-semibold text-gray-300">
                区块高度:{" "}
                <span className="text-yellow-300"> {item.lastHeight}</span>
                &nbsp;&nbsp; 原生代币:{" "}
                <span className="text-yellow-300">{item.symbol}</span>
              </p>

              <p className="mt-1 text-sm font-semibold text-gray-300">
                交易量:{" "}
                <span className="text-yellow-300">{item.transactions} </span>
              </p>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            onClick={() => {
              gotoBlock("https://etherscan.io/");
            }}
            className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            查看区块浏览器
          </a>
        </div>
      </div>
    </section>
  );
}
