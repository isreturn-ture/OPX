import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import ReactEcharts from "echarts-for-react";

export default function HomeMainFourView() {
  let [newstitle, setnewstitle] = React.useState<any>([]);
  let [btcprice, setbtcprice] = React.useState<any>([]);
  let [btctime, setbtctime] = React.useState<any>([]);
  useEffect(() => {
    axios.get("/api/news").then((res) => {
      setnewstitle(res.data);
    });
    axios.get("/api/btc").then((res) => {
      let Kdata = [];
      let Time = [];
      for (let i = 4; i >= 0; i--) {
        const T = res.data.data[i].splice(0, 1);
        Time.push(T);
        //删除第一个元素
        [res.data.data[i][1], res.data.data[i][3]] = [
          res.data.data[i][3],
          res.data.data[i][1],
        ];
        Kdata.push(res.data.data[i]);
      }

      for (let i = 4; i >= 0; i--) {
        const timestamp = parseInt(Time[i][0]);
        const date = new Date(timestamp);
        // 按指定的格式将日期转换为字符串
        const formattedDate = date.toLocaleString("zh-CN", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        });
        Time[i][0] = formattedDate;
      }

      setbtcprice(Kdata);
      setbtctime(Time);
    });
  }, []);

  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
    },
    xAxis: {
      data: btctime,
    },
    yAxis: {},
    series: [
      {
        type: "k",
        itemStyle: {
          color: "#00da3c", // 上涨时的颜色
          color0: "#ec0000", // 下跌时的颜色
          borderColor: "#008F28", // 上涨时边框的颜色
          borderColor0: "#8A0000", // 下跌时边框的颜色
        },
        data: btcprice,
      },
    ],
  };

  const Router = useRouter();

  function gotoBlock(): void {
    Router.push({ pathname: "https://www.theblockbeats.info/" });
  }

  function gotoOKX(): void {
    Router.push({ pathname: "https://okx.com/join/13716037" });
  }

  return (
    <div className="bg-black text-gray-50">
      <div className="container grid grid-cols-12 mx-auto">
        <div className="flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover bg-black lg:col-span-6 lg:h-auto">
          <div className="flex flex-col items-center p-8 py-12 text-center">
            <h1 className="py-4 text-3xl font-bold"> BTC &nbsp; 市场价格</h1>
            <ReactEcharts option={option} className="w-full h-full" />
            <p className="pb-6 text-white font-bold">数据来源：OKX</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-7 h-7 hover:cursor-pointer"
              onClick={gotoOKX}
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
        <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-gray-700">
          {newstitle.map((item: any) => (
            <div className="pt-6 pb-4 space-y-2" key={item.link}>
              <span className="font-black text-blue-400">律动快讯</span>
              <h1 className="text-xl font-bold">{item.title}</h1>
              <p className="text-sm font-extralight text-gray-300">
                {item.content.replace(/<a.*?>(.*?)<\/a>/g, "")}
              </p>
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-flex items-center py-2 space-x-2 text-sm text-violet-400"
              >
                <span onClick={gotoBlock}>前往律动查看</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 font-bold"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
