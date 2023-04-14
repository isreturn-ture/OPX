import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

// 导入 wagmi 和 ConnectKit 的必要模块以及 React Hook
import { ConnectKitProvider, getDefaultClient } from "connectkit";
import { WagmiConfig, createClient, configureChains } from "wagmi";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
import { localhost, polygonMumbai } from "@wagmi/chains";
import MyCustomAvatar from "@/Utils/components/Connectkit/MyCustomAvatar";

// 获取 Alchemy ID 环境变量
const alchemyId = process.env.ALCHEMY_ID;

// 配置链
const chains = [mainnet, polygon, optimism, arbitrum, localhost, polygonMumbai];

// 创建客户端对象
const client = createClient(
  getDefaultClient({
    appName: "OPX-Studio",
    alchemyId,
    chains,
  })
);

export default function App({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider
        theme="midnight"
        options={{ language: "zh-CN", customAvatar: MyCustomAvatar }}
      >
        <Component {...pageProps} />
      </ConnectKitProvider>
    </WagmiConfig>
  );
}
