import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination,
  Navigation,
  Autoplay,
  SwiperOptions,
} from "swiper";
import "swiper/swiper-bundle.css";
SwiperCore.use([Pagination, Navigation, Autoplay]);

export default function ProjectMainView() {
  const UI = [
    {
      t: "/OPXtokenUi/引导页.jpg",
    },
    {
      t: "/OPXtokenUi/首页.jpg",
    },
    {
      t: "/OPXtokenUi/创建钱包-首页.jpg",
    },
    {
      t: "/OPXtokenUi/创建钱包-步骤2.jpg",
    },
    {
      t: "/OPXtokenUi/创建钱包-步骤3.jpg",
    },
    {
      t: "/OPXtokenUi/创建钱包-步骤4.jpg",
    },
    {
      t: "/OPXtokenUi/资产页-首页-未连接.jpg",
    },
    {
      t: "/OPXtokenUi/资产页-首页-已连接.jpg",
    },
    {
      t: "/OPXtokenUi/闪兑.jpg",
    },
    {
      t: "/OPXtokenUi/市场.jpg",
    },
    {
      t: "/OPXtokenUi/DAPP.jpg",
    },
  ];

  const params: SwiperOptions = {
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  };

  return (
    <section className="bg-black text-white data_bg_height">
      <div className="container flex flex-col-reverse m-auto lg:flex-row">
        <div className="flex justify-center flex-col px-2 py-8 space-y-24 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 bg-black text-white">
          <div className="flex  space-x-2 sm:space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="flex-shrink-0 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              ></path>
            </svg>
            <div className="space-y-2 mx-auto">
              <p className="text-lg font-extrabold leading-snug">
                OPcoin 数字藏品交易平台
              </p>
              <p className="leading-snug pt-4">
                通过区块链技术来完成数字藏品的交易，保证交易的公开透明，同时也保证了数字藏品的真实性。
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 xl:w-3/5 ">
          <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
            <div className="mockup-phone">
              <div className="camera"></div>
              <div className="display">
                <div className="artboard artboard-demo date_phone ">
                  <Swiper {...params} className="w-full h-full">
                    {UI.map((item) => (
                      <SwiperSlide key={item.t} className="w-full h-full">
                        <img
                          src={item.t}
                          alt="phone-1"
                          className="w-full h-full  object-left-top"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
