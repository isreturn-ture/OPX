import dynamic from "next/dynamic";
import { Helmet } from "react-helmet";

const TOP = dynamic(() => import("@/components/TOP"));
const Main = dynamic(() => import("@/components/Join/JoinMainView"));
const Footer = dynamic(() => import("@/components/Footer"));
export default function Join() {
  return (
    <div>
      <Helmet>
        <title>OPX工作室-加入我们</title>
        <meta
          name="description"
          content="OPX工作室团队 OPX工作室加入我们 加入工作室"
        />
        <meta
          name="keywords"
          content="OPX OP 前端工作室 OPX工作室 程序员 外包工作室 Github 前端"
        />
        <meta property="og:title" content="OPX工作室-加入我们" />
        <meta
          property="og:description"
          content="OPX工作室 OPX加入团队 加入工作室 介绍"
        />
      </Helmet>
      <TOP />
      <Main />
      <Footer />
    </div>
  );
}
