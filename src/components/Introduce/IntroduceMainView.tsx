import { useRouter } from "next/router";

interface TeamMember {
  name: string;
  position: string;
  img: string;
  introduction?: string;
  github: string;
}

export default function IntroduceMainView() {
  const teams: Array<TeamMember> = [
    {
      name: "LSH",
      position: "前端开发工程师",
      img: "https://opx-1314438067.cos.ap-hongkong.myqcloud.com/dog.jpg?imageMogr2/format/webp",
      introduction: "自学的前端，菜鸟一个",
      github:
        "https://github.com/LSH160981?tab=repositories?imageMogr2/format/webp",
    },
    {
      name: "smash",
      position: "前端开发工程师",
      img: "https://opx-1314438067.cos.ap-hongkong.myqcloud.com/bb.jpg?imageMogr2/format/webp",
      introduction: "热爱学习技术 喜欢和别人讨论技术",
      github: "https://github.com/smash-llj",
    },
    {
      name: "龙华",
      position: "前端开发工程师",
      img: "https://opx-1314438067.cos.ap-hongkong.myqcloud.com/lh.jpg?imageMogr2/format/webp",
      introduction: "编程菜鸡",
      github: "https://github.com/dyingChinese",
    },
    {
      name: "齊老佛爷",
      position: "Java全栈开发",
      img: "https://opx-1314438067.cos.ap-hongkong.myqcloud.com/tqs.jpg?imageMogr2/format/webp",
      introduction:
        "苦逼秃头大二闲散人员，计算机学习路上的绊脚石，励志成为Java高手的咸鱼",
      github: "https://github.com/06hao",
    },
    {
      name: "QX",
      position: "后端开发工程师",
      img: "https://opx-1314438067.cos.ap-hongkong.myqcloud.com/maomao.jpeg?imageMogr2/format/webp",
      introduction:
        "在校大学生，一名代码爱好者， 熟悉使用 MySQL数据库和Tomcat 应用服务器的应用部署和配置， 擅长使用Java和相关工具开发， 熟悉 Java 语言，掌握 Spring、MyBatis框架",
      github: "https://github.com/QX-JX",
    },
    {
      name: "0082",
      position: "前端开发工程师",
      img: "https://opx-1314438067.cos.ap-hongkong.myqcloud.com/0082.jpg?imageMogr2/format/webp",
      introduction: "在校大学生",
      github: "https://github.com/dengdfkdf",
    },
    {
      name: "liu",
      position: "前端开发工程师",
      img: "https://opx-1314438067.cos.ap-hongkong.myqcloud.com/huitu.jpg?imageMogr2/format/webp",
      introduction: "不想描述",
      github: "https://github.com/babalaliuyang",
    },
    {
      name: "小何",
      position: "后端开发工程师",
      img: "https://opx-1314438067.cos.ap-hongkong.myqcloud.com/xiaohe.jpg?imageMogr2/format/webp",
      introduction: "大二javaer",
      github: "https://github.com/2382546457",
    },
    {
      name: "墨卿",
      position: "前端开发工程师",
      img: "https://opx-1314438067.cos.ap-hongkong.myqcloud.com/mm.jpg?imageMogr2/format/webp",
      introduction: "每次npm就像是开奖,不见红就是万幸了",
      github: "https://github.com/isreturn-ture",
    },
  ];

  const router = useRouter();
  const gotoGithub = (adds: string): void => {
    router.push({ pathname: adds });
  };

  return (
    <section className="py-6 bg-black text-gray-100 min-h-screen">
      <div className="container flex flex-col  lg:items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
        <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">
          OPX 团队
        </h1>
        <p className="max-w-2xl text-center text-gray-700 font-bold">
          加入我们，用你的能力为web3和人工智能世界带来革命性的变化,让我们成为未来的一部分。
        </p>
        <div className="flex flex-row flex-wrap-reverse justify-center ">
          {teams.map((item) => (
            <div
              key={item.name}
              className="card w-96 bg-base-100 shadow-xl mx-0 lg:mx-8 my-8 lg:my-2"
            >
              <figure>
                <img
                  src={item.img}
                  alt="Shoes"
                  className="w-full h-64 object-cover"
                />
              </figure>
              <div className="card-body bg-black border rounded-b-lg">
                <h2 className="card-title">
                  {item.name}
                  <div className="badge bg-indigo-800">{item.position}</div>
                </h2>
                <p>{item.introduction}</p>
                <div className="card-actions justify-end">
                  <div
                    className="badge badge-outline hover:cursor-pointer"
                    onClick={() => {
                      gotoGithub(item.github);
                    }}
                  >
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
                  </div>
                  <div className="badge badge-outline hover:cursor-pointer">
                    Link
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
