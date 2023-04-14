export default function Screen() {
  return (
    <div className="fixed z-10 inset-0 overflow-hidden">
      <div
        role="alert"
        className="md:w-2/6  rounded-r-2xl  bg-white  p-4 shadow-xl"
      >
        <div className="flex items-start gap-4">
          <span className="text-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>

          <div className="flex-1">
            <strong className="block font-bold text-black ">
              您的申请已经提交成功,我们会尽快与您取得联系.
            </strong>

            <p className="mt-1 text-sm text-gray-500">请随时关注您的邮箱</p>
          </div>
        </div>
      </div>
    </div>
  );
}
