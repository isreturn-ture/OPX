import dynamic from "next/dynamic";
import { Helmet } from "react-helmet";
const TOP = dynamic(() => import("@/components/TOP"));
const Main = dynamic(() => import("@/components/Member/MemberMainView"));
const Footer = dynamic(() => import("@/components/Footer"));
export default function memberPage() {
  return (
    <div>
      <Helmet>
        <title>OPX工作室-工作室介绍</title>
        <meta
          name="description"
          content="OPX工作室团队 OPX工作室时间线 工作室历史"
        />
        <meta
          name="keywords"
          content="OPX OP 前端工作室 OPX工作室 程序员 外包工作室 Github 前端"
        />
        <meta property="og:title" content="OPX工作室-工作室介绍" />
        <meta
          property="og:description"
          content="OPX工作室 OPX团队 工作室介绍"
        />
      </Helmet>
      <TOP />
      <Main />
      <Footer />
    </div>
  );
}
