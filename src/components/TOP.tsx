import { ConnectKitButton } from "connectkit";
import Link from "next/link";
import { useState } from "react";
import React from "react";
export default function TOP() {
  const routerlist: Array<{ name: string; path: string }> = [
    { name: "首页", path: "/" },
    { name: "工作室介绍", path: "/member" },
    { name: "成员介绍", path: "/introduce" },
    { name: "项目展示", path: "/project" },
  ];

  const [router, setRouter] = useState(routerlist);

  return (
    <div className="w-full mx-auto bg-black -mb-1">
      <header className="text-white body-font border-b border-gray-200">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <span className="lg:ml-3 text-xl font-bold hover:cursor-pointer">
            OPX-工作室
          </span>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center my-6 lg:my-0">
            {router.map((item) => (
              <Link href={item.path} key={item.name}>
                <span
                  className="mr-2  lg:mr-10 font-bold data_router "
                  key={item.path}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>

          <ConnectKitButton.Custom>
            {({ isConnected, show }) => {
              return (
                <button
                  onClick={show}
                  className=" btn lg:w-44 w-40 gap-2  md:mx-2 md:mb-0  mb-2 lg:mx-4 bg-black border-white border-2 hover:bg-black hover:border-purple-500"
                >
                  {isConnected ? "已连接" : "连接至OPX网络"}
                </button>
              );
            }}
          </ConnectKitButton.Custom>
          <Link href="/Join">
            <button className="btn lg:w-44 w-40 gap-2  bg-black border-white border-2 hover:bg-black hover:border-green-500 ">
              加入我们
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
}
