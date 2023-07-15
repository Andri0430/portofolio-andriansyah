import { BiCodeAlt } from "react-icons/bi";
import { useOutletContext } from "react-router-dom";

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
      "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    link: "#",
  },
  {
    id: 3,
    projectName: "Ticket Travel Dekstop",
    image: "a.png",
    description:
      "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    link: "#",
  },
];

export default function Project() {
  const [mode, setMode, sideBar, setSideBar] = useOutletContext();
  return (
    <main
      className={`flex flex-col justify-center gap-16 px-10 py-14 ${
        mode === "Dark" && "bg-slate-700 text-gray-300"
      }`}
      onClick={() => setSideBar(!sideBar)}
    >
      <select
        className="p-1 hidden fixed top-2 right-10 items-center text-gray-800 border-2 rounded-md hover:bg-slate-500 hover:text-gray-100 cursor-pointer lg:flex"
        onChange={(e) => setMode(e.target.value)}
      >
        <option value="Light">Light</option>
        <option value="Dark">Dark</option>
      </select>
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold flex flex-row items-center gap-2">
          My Project <BiCodeAlt />{" "}
        </h1>
        {projects.map((project) => (
          <div
            key={project.id}
            className={`${mode === "Dark" && 'hover:bg-slate-950'} flex flex-col p-3 border-gray-300 border-b-2 hover:cursor-pointer text-xl hover:bg-gray-200 hover: rounded-md`}
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
