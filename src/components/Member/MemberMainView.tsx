export default function MemberMainView() {
  const timeLine = [
    {
      title: "OPX工作室官网上线",
      date: "2022年4月",
      content:
        "今天是我们的官网上线的里程碑的一天，我们是一支新青年技术团队，借助web3技术和区块链技术，探索数字世界的无限可能，打造全新的NFT数字资产交易生态！",
    },
    {
      title: "OPCoin上线",
      date: "2023年3月",
      content:
        "OPcoin将通过区块链技术实现数字资产的无缝流通，并推动数字经济的发展。我们的团队由经验丰富的专业人士组成，不断创新、突破，在数字资产领域探索新的可能性。",
    },
    {
      title: "OPX工作室成立",
      date: "2022年12月",
      content:
        "我们成立于2022年12月，旨在为web3区块链数字资产技术开发提供创新的解决方案。我们的使命是通过技术的力量，推动数字经济的发展，让更多人受益于数字化时代的机遇。我们的团队由一群充满激情和经验丰富的开发人员组成，将不断探索、创新，在数字资产领域实现突破。",
    },
  ];
  return (
    <section className="bg-black text-white min-h-screen ">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-violet-400">
              <h3 className="text-3xl font-semibold">OPX工作室</h3>
              <span className="text-sm font-bold tracking-wider uppercase text-gray-400">
                时间线简介
              </span>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-16 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
              {timeLine.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col  sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400"
                >
                  <h3 className="text-xl font-semibold tracking-wide">
                    {item.title}
                  </h3>
                  <time className="text-xs tracking-wide uppercase text-gray-400">
                    {item.date}
                  </time>
                  <p className="mt-3">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
