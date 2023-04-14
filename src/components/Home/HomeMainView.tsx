import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/router";
import SwiperCore, {
  Pagination,
  Navigation,
  Autoplay,
  SwiperOptions,
} from "swiper";
import "swiper/swiper-bundle.css";
SwiperCore.use([Pagination, Navigation, Autoplay]);

export default function HomeMainView() {
  const titles: Array<{ t: string }> = [
    { t: "Web3" },
    { t: "Solidity" },
    { t: "DeFi" },
    { t: "NFT" },
    { t: "DAO" },
  ];

  const params: SwiperOptions = {
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  };

  const router = useRouter();
  const gotoGithub = () => {
    router.push({
      pathname: "https://github.com/OP-Future",
    });
  };

  return (
    <div className="hero min-h-screen ">
      <div className="hero-overlay bg-black "></div>
      <div className="hero-content text-center text-neutral-content justify-center items-center p-0 ">
        <div className="max-w-md mb-48 lg:mb-0">
          <h1 className="flex  my-4 justify-center items-center lg:mb-5 text-5xl font-bold tracking-widest data_titleText lg:text-7xl">
            OPX工作室
          </h1>

          <Swiper {...params} className="w-96">
            {titles.map((item) => (
              <SwiperSlide
                className="text-6xl mx-18  flex justify-center items-center lg:text-6xl font-bold text-transparent bg-clip-text data_bg my-8 lg:my-4  "
                key={item.t}
              >
                {item.t}
              </SwiperSlide>
            ))}
          </Swiper>

          <h1 className="my-20 mr-4 lg:mr-0 lg:my-20 font-bold tracking-widest text-2xl">
            重新定义Web3
          </h1>
          <div className="indicator">
            <span className="indicator-item indicator-top indicator-center badge badge-secondary">
              Follow
            </span>
            <div
              onClick={gotoGithub}
              className="btn   space-x-5 bg-white border-gray-400 text-black border-2  hover:bg-white hover:border-gray-400 hover:text-purple-800"
            >
              前往我们的
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-github mx-2"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
              团队
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
