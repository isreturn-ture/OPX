import { useRouter } from "next/router";
import React from "react";

export default function FooterView() {
  const data: any[] = [
    {
      title: "Dapp",
      pt: [
        { name: "介绍", src: "https://ethereum.org/zh/developers/docs/dapps/" },
        { name: "生态", src: "https://dappradar.com/" },
        { name: "开发者", src: "https://docs.polygonscan.com/" },
      ],
    },
    {
      title: "API",
      pt: [
        { name: "OKX", src: "https://www.okx.com/cn/oktc" },
        { name: "Polygon", src: "https://polygon.technology/" },
        { name: "ETH", src: "https://ethereum.org/zh/developers/docs/" },
      ],
    },
    {
      title: "友情链接",
      pt: [
        { name: "博客", src: "http://101.42.20.119:8080/" },
        { name: "待添加", src: "" },
        { name: "待添加", src: "" },
      ],
    },
  ];
  const router = useRouter();
  const gotolink = (adds: string) => {
    router.push({ pathname: adds });
  };

  return (
    <footer className="px-4 divide-y bg-black text-white">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full">
              <img src="/TokenUI/polygon_logo.png" alt="" className="w-8 h-8" />
            </div>
            <span className="self-center text-2xl font-semibold">OPX</span>
          </a>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          {data.map((item: any) => (
            <div className="space-y-3" key={item.title}>
              <h3 className="tracking-wide uppercase text-base font-black text-gray-50">
                {item.title}
              </h3>
              {item.pt.map((item: any) => (
                <ul className="space-y-1">
                  <li>
                    <a
                      rel="noopener noreferrer"
                      className="text-md font-medium text-gray-300 hover:text-white"
                      href="#"
                      onClick={() => {
                        gotolink(item.src);
                      }}
                    >
                      {item.name}
                    </a>
                  </li>
                </ul>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="py-6 text-sm font-semibold text-center text-yellow-600">
        ©2022 OPX网络工作室 版权所有
      </div>
    </footer>
  );
}
