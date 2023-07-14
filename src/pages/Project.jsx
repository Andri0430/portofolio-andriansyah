const projects = [
    {
      id: 1,
      projectName: "Ticket Travel API",
      image: "gambar.jpg",
      description:
        "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
      link: "#",
    },
    {
      id: 2,
      projectName: "Reservation Patient MVC",
      image: "gambar.jpg",
      description:
        "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
      link: "#",
    },
    {
      id: 3,
      projectName: "Ticket Travel Dekstop",
      image: "gambar.jpg",
      description:
        "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
      link: "#",
    },
  ];
  
  export default function Project() {
    return (
      <main className="flex flex-col justify-center gap-16 px-10 py-14">
        <select
          className="p-1 hidden fixed top-2 right-10 items-center text-gray-800 border-2 rounded-md hover:bg-slate-500 hover:text-gray-100 cursor-pointer lg:flex"
        >
          <option value="">Theme</option>
          <option value="">Light</option>
          <option value="">Dark</option>
        </select>
        <div className="flex flex-col gap-2 text-gray-600">
          <h1 className="text-4xl font-bold">My Project @</h1>
          {projects.map((project) => (
            <div
              key={project.id}
              className={
                project.id != projects.length
                  ? "flex flex-col py-3 border-b-2 border-gray-200 hover: cursor-pointer text-xl"
                  : "flex flex-col py-3 hover:cursor-pointer text-xl"
              }
            >
              <div className="flex flex-col items-start gap-3 md:flex-row md:items-center">
                <img
                  src={project.image}
                  alt={project.projectName}
                  className="w-[532px] h-[178px] rounded-lg sm:h-[256px] md:w-[780px] md:h-[164px] lg:w-[256px] lg:h-[98px]"
                />
                <div className="flex flex-col gap-1 flex-wrap md:flex-col">
                  <h3 className="text-2xl font-bold">
                    {project.projectName}
                  </h3>
                  <p className="text-sm">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    );
  }