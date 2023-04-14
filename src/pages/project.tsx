import dynamic from "next/dynamic";
import { Helmet } from "react-helmet";
const TOP = dynamic(() => import("@/components/TOP"));
const Main = dynamic(() => import("@/components/Project/ProjectMainView"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Project() {
  return (
    <div>
      <Helmet>
        <title>OPX工作室-项目展示</title>
        <meta
          name="description"
          content="OPX工作室团队 OPX工作室项目 外包项目 工作室展示"
        />
        <meta
          name="keywords"
          content="OPX OP 前端工作室 OPX工作室 程序员 外包工作室 Github 前端"
        />
        <meta property="og:title" content="OPX工作室-项目展示" />
        <meta
          property="og:description"
          content="OPX工作室 OPX展示 OP OPX外包项目"
        />
      </Helmet>
      <TOP />
      <Main />
      <Footer />
    </div>
  );
}
