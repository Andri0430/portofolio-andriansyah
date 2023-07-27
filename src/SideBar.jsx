import { NavLink } from "react-router-dom";
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

export default function SideBar({ sideBar, setClickMenu, clickMenu, theme }) {
  return (
    <section
      className={`${
        sideBar && `-translate-x-full`
      } flex flex-col items-center justify-around bg-gray-100 px-4 gap-2 h-screen fixed left-0 text-gray-950 transition-all lg:translate-x-0 lg:sticky lg:top-0 ${
        theme === "Dark" && "bg-slate-900"
      }`}
    >
      <img
        src="Andrian.jpg"
        className="w-40 h-40 rounded-full p-3 hover: cursor-pointer"
      />
      <div
        className={`flex flex-col w-[274px] ${
          theme === "Dark" && "text-gray-200"
        }`}
      >
        <NavLink
          onClick={() => setClickMenu("Home")}
          className={`${
            clickMenu === "Home" &&
            `${theme === "Dark" ? "bg-slate-700 rounded-md" : "bg-gray-300"}`
          } w-full p-3 hover:bg-gray-300 hover:rounded-md ${theme === "Dark" && 'hover:bg-slate-800'}`}
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          onClick={() => setClickMenu("Project")}
          className={`${
            clickMenu === "Project" &&
            `${theme === "Dark" ? "bg-slate-700 rounded-md" : "bg-gray-300"}`
          } w-full p-3 hover:bg-gray-300 hover:rounded-md ${theme === "Dark" && 'hover:bg-slate-800'}`}
          to={"/project"}
        >
          Project
        </NavLink>
        <NavLink
          onClick={() => setClickMenu("Cv")}
          className={`${
            clickMenu === "Cv" &&
            `${theme === "Dark" ? "bg-slate-700 rounded-md" : "bg-gray-300"}`
          } w-full p-3 hover:bg-gray-300 hover:rounded-md ${theme === "Dark" && 'hover:bg-slate-800'}`}
          to={"/cv"}
        >
          Curiculum Vitae
        </NavLink>
        <NavLink
          className={`${
            clickMenu === "Contact" &&
            `${theme === "Dark" ? "bg-slate-700 rounded-md" : "bg-gray-300"}`
          } w-full p-3 hover:bg-gray-300 hover:rounded-md ${theme === "Dark" && 'hover:bg-slate-800'}`}
          to={"mailto:andriansyah0430@gmail.com"}
        >
          Contact
        </NavLink>
      </div>
      <div
        className={`flex gap-6 justify-evenly w-full items-center ${
          theme === "Dark" && "text-gray-200"
        }`}
      >
        <a
          href="https://github.com/Andri0430"
          className={`text-[26px]`}
        >
          <AiFillGithub />
        </a>
        <a
          href="#"
          className={`text-[26px]`}
        >
          <AiFillFacebook />
        </a>
        <a
          href="#"
          className={`text-[26px]`}
        >
          <AiFillInstagram />
        </a>
        <a
          href="#"
          className={`text-[26px]`}
        >
          <AiFillLinkedin />
        </a>
        <a
          href="#"
          className={`text-[26px]`}
        >
          <AiFillTwitterCircle />
        </a>
      </div>
    </section>
  );
}
