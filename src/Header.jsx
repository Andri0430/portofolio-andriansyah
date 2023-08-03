import { GiHamburgerMenu } from "react-icons/gi";
import ThemeButton from "./components/ThemeButton";
import { useContext } from "react";
import { ThemeContext } from "./App";

export default function Header({ setSideBar, sideBar }) {
  const { theme } = useContext(ThemeContext);
  return (
    <header
      className={`flex justify-between items-center py-2 px-7 sticky top-0 font-bold bg-gray-100 md:p-5 lg:flex-row lg:justify-end lg:p-2 lg:absolute ${
        theme === "Dark" && "bg-slate-800"
      }`}
      onClick={() => {
        if (sideBar === false) {
          setSideBar(true);
        }
      }}
    >
      <button
        onClick={(e) => {
          e.preventDefault();
          setSideBar(!sideBar);
        }}
        className={`text-xl lg:hidden ${theme === "Dark" && "text-gray-300"}`}
      >
        <GiHamburgerMenu />
      </button>
      <ThemeButton onClick={""} />
    </header>
  );
}
