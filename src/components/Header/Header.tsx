export const Header = () => {
  return (
    <header className="w-full p-5 bg-white ">
      <div className="flex items-center justify-between">
        <img
          src="https://nordl.io/_next/static/media/LogoWithName.1a6c16aa.svg"
          alt=""
          className="h-10"
        />
        <ul className="flex gap-2">
          <li >
            <a  href="https://nordl.io/about-us">
            <button className="border-none px-6 py-2 rounded-lg text-[#00dd9a] font-semibold">About us</button>
            </a>
          
          </li>
          <li className="mr-6">
          <a  href="https://app.nordl.io/">
          <button className="border-[1px] border-[#00dd9a] px-6 py-2 rounded-lg text-[#00dd9a] font-semibold">Login</button>

            </a>
          </li>
          <li >
          <a  href="https://play.google.com/store/apps/details?id=com.nordl.app&pli=1">
          <button className="bg-[#00dd9a] px-6 py-2 rounded-lg text-[#fff] font-semibold">Install App</button>

            </a>

          </li>
        </ul>
      </div>
    </header>
  );
};
