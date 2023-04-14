import dynamic from "next/dynamic";
import { Helmet } from "react-helmet";

// Import the components for the home page
const TOP = dynamic(() => import("@/components/TOP"));
const Main = dynamic(() => import("@/components/Home/HomeMainView"));
const MainTwo = dynamic(() => import("@/components/Home/HomeMainTwoView"));
const MainThree = dynamic(() => import("@/components/Home/HomeMainThree"));
const MainFour = dynamic(() => import("@/components/Home/HomeMainFourView"));

const Footer = dynamic(() => import("@/components/Footer"));
export default function Home() {
  return (
    <div>
      <Helmet>
        <title>OPX工作室</title>
        <meta
          name="description"
          content="OPX工作室 OPX 主页 介绍 区块链 web3 ETH"
        />
        <meta
          name="keywords"
          content="OPX OP 前端工作室 OPX工作室 程序员 外包工作室 Github 前端"
        />
        <meta property="og:title" content="OPX工作室" />
        <meta property="og:description" content="OPX工作室 OPX 主页 介绍" />
      </Helmet>
      <TOP />
      <Main />
      <MainTwo />
      <MainThree />
      <MainFour />
      <Footer />
    </div>
  );
}
