import { GiHamburgerMenu } from "react-icons/gi";

export default function Header({ mode, setMode, setSideBar, sideBar }) {
  return (
    <header
      className={`flex justify-between items-center py-2 px-7 sticky top-0 font-bold bg-gray-100 border-b-2 md:p-5 lg:flex-row lg:justify-end lg:p-2 lg:absolute ${
        mode === "Dark" && "bg-slate-800"
      }`}
    >
      <button
        onClick={(e) => {
          e.preventDefault();
          setSideBar(!sideBar);
        }}
        className={`text-xl lg:hidden ${mode === "Dark" && 'text-gray-300'}`}
      >
        <GiHamburgerMenu />
      </button>
      <select
        value={mode}
        onChange={(e) => {
          setMode(e.target.value);
          console.log(mode);
        }}
        className="p-1 items-center text-gray-800 border-2 rounded-md hover:bg-slate-500 hover:text-gray-100 cursor-pointer md:text-2xl"
      >
        <option value="Light">Theme</option>
        <option value="Light">Light</option>
        <option value="Dark">Dark</option>
      </select>
    </header>
  );
}
