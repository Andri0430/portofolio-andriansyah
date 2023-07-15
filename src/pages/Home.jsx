import { FaRegHandPeace } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { BiCodeAlt } from "react-icons/bi";

const projects = [
  {
    id: 1,
    projectName: "Ticket Travel API",
    image: "travel.png",
    description:
      "lorem lorem lor  em lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    link: "#",
  },
  {
    id: 2,
    projectName: "Reservation Patient MVC",
    image: "patient.png",
    description:
      "lorem lorem lor  em lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    link: "#",
  },
  {
    id: 3,
    projectName: "Ticket Travel Dekstop",
    image: "a.png",
    description:
      "lorem lorem lor  em lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    link: "#",
  },
];

export default function Home() {
  const [mode, setMode, sideBar, setSideBar, clickMenu, setClickMenu] =
    useOutletContext();
  return (
    <main
      className={`flex flex-col justify-center gap-16 px-10 py-14 ${
        mode === "Dark" && "bg-slate-700 text-gray-300"
      }`}
      onClick={() => {if(sideBar === false){setSideBar(true)}}}
    >
      <select
        className={`${
          mode === "Dark" && "bg-slate-600"
        } font-bold p-1 hidden fixed top-2 right-10 items-center border-2 rounded-md cursor-pointer lg:flex`}
        onChange={(e) => setMode(e.target.value)}
      >
        <option value="Light">Light</option>
        <option value="Dark">Dark</option>
      </select>
      <div className={`flex flex-col gap-4`}>
        <p className="text-2xl flex items-center md:text-xl">
          Hey there <FaRegHandPeace />
        </p>
        <div>
          <h1 className="text-5xl font-bold">I'm Andriansyah</h1>
          <h3 className="text-2xl font-bold">
            Junior Frontend & BackEnd Developer
          </h3>
        </div>
        <p className="text-lg">
          Software development enthusiast that has a high learning curve, seek
          best practices, stay up-to-date on emerging technologies, and eager to
          learn something new.
        </p>
        <div className="h-[48px] flex items-center font-bold">
          <NavLink
            className={`border-2 text-md rounded-md w-fit p-3 border-gray-800 hover:bg-gray-600 hover:text-gray-100 hover:border-none ${
              mode === "Dark" && "border-gray-300 hover:bg-gray-500"
            }`}
            to={"/Cv"}
            onClick={() => setClickMenu("Cv")}
          >
            Show Profile
          </NavLink>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold flex items-center gap-2">
          My Project <BiCodeAlt />
        </h1>
        {projects.map((project) => (
          <div
            key={project.id}
            className={`${
              mode === "Dark" && "hover:bg-slate-950"
            } flex flex-col p-3 border-gray-300 border-b-2 hover:cursor-pointer text-xl hover:bg-gray-200 hover: rounded-md`}
          >
            <div className="flex flex-col items-start gap-3 md:flex-row md:items-center">
              <img
                src={project.image}
                alt={project.projectName}
                className="w-[532px] h-[178px] rounded-lg sm:h-[256px] md:w-[780px] md:h-[164px] lg:w-[256px] lg:h-[98px]"
              />
              <div className="flex flex-col gap-1 flex-wrap md:flex-col">
                <h3 className="text-2xl font-bold">{project.projectName}</h3>
                <p className="text-sm">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
