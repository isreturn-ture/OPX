import dynamic from "next/dynamic";
import React, { useState } from "react";
const Success = dynamic(() => import("@/Utils/components/ModelSuccess"));
const Warring = dynamic(() => import("@/Utils/components/ModelWarring"));
const Error = dynamic(() => import("@/Utils/components/ModelError"));
export default function JoinMainView() {
  const [t, setT] = useState<number>(0);
  /*获取表单数据*/
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [technique, setTechnique] = useState<string>("");
  let [isSubmitting, setIsSubmitting] = useState<boolean>(false); // 初始化节流状态，表示当前未处于节流状态

  const THROTTLE_INTERVAL = 60 * 1000; // 设置节流时间间隔，单位为毫秒

  const Join = (e: any) => {
    e.preventDefault();

    if (isSubmitting) {
      setT(404);
      // 如果当前正在节流状态，直接返回
      return;
    } else if (username == "" || email == "" || technique == "") {
      alert("请填写完整的信息");
      return;
    } else if (!/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email)) {
      alert("无效的电子邮件地址，请重新输入！");
      return;
    } else {
      setIsSubmitting(true); // 设置节流状态为 true，表示当前处于节流状态

      setTimeout(() => {
        // 在指定的时间间隔后，将节流状态设为 false
        setIsSubmitting(false);
      }, THROTTLE_INTERVAL);

      fetch("https://opcoin.cn:6080/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, technique }),
      }).then((res) => {
        res.json().then((data) => {
          console.log(data.code);
          setT(data.code);
        });
      });
    }
  };

  if (t !== 0) {
    setTimeout(() => {
      setT(0);
    }, 1700);
  }

  return (
    <div className="bg-black grid min-w-full min-h-screen grid-cols-1 gap-8 px-8 py-16 mx-auto  md:grid-cols-2 md:px-12 lg:px-16 xl:px-32  text-white">
      {/* 左侧 */}
      <div className="flex flex-col ">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
            让我们了解一下你！
          </h2>
          <div className=" text-gray-400">Maybe this is an opportunity</div>
        </div>
      </div>

      {/* 表单 */}
      <form className="space-y-6 ng-untouched ng-pristine ng-valid">
        <div>
          <label htmlFor="username" className="text-sm">
            您的称呼
          </label>
          <input
            id="name"
            type="text"
            name="username"
            placeholder=""
            className="w-full p-3 rounded bg-black"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm">
            联系方式 (邮箱)
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-3 rounded bg-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm">
            您的自我介绍 (技术栈与作品展示)
          </label>
          <textarea
            id="message"
            rows={3}
            className="w-full p-3 rounded bg-black"
            value={technique}
            onChange={(e) => setTechnique(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          onClick={Join}
          className="w-full p-2 text-md font-bold tracking-wide uppercase rounded bg-emerald-400 text-black hover:bg-teal-200"
        >
          提交审核
        </button>
      </form>

      {/* 成功 */}
      {t == 200 ? <Success /> : null}

      {/*失败 */}

      {t == 502 ? <Error /> : null}

      {/* 多次提交 */}
      {t == 404 ? <Warring /> : null}
    </div>
  );
}
