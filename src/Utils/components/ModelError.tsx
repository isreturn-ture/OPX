export default function Error() {
  return (
    <div className="fixed z-10 inset-0 overflow-hidden">
      <div
        role="alert"
        className="md:w-2/6  rounded border-l-4 border-red-500 bg-red-50 p-4"
      >
        <div className="flex items-center gap-2 text-red-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
              clipRule="evenodd"
            />
          </svg>

          <strong className="block font-blod">
            您的提交没有得到有效的处理,请稍后再次提交
          </strong>
        </div>

        <p className="mt-2 text-sm text-red-700">
          这有可能是由于您的网络连接不稳定或者服务器出现故障导致的,请稍后再次提交
        </p>
      </div>
    </div>
  );
}
