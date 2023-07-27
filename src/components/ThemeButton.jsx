import { useContext } from "react";
import { ThemeContext } from "../App";
import { BsSun, BsFillMoonFill } from "react-icons/bs";

export default function ThemeButton() {
  const { theme, setTheme, clickMode, setClickMode } = useContext(ThemeContext);
  return (
    <button onClick={() => setClickMode(!clickMode)}>
      <div
        className={`${
          theme == "Dark" && "text-gray-300"
        } flex justify-center items-center gap-1`}
      >
        {theme == "Light" ? <BsSun size={20}/> : <BsFillMoonFill size={20}/>}
      </div>
      {clickMode && (
        <div
          className={`${
            theme == "Dark" && "text-gray-200 bg-slate-700 border-2 border-gray-400"
          } flex flex-col gap-2 items-center w-[70px] shadow-lg rounded-md absolute top-9 right-0 border-2 border-gray-300 text-sm`}
        >
          <div
            className="flex justify-center items-center gap-2 relative"
            onClick={() => setTheme("Light")}
          >
            <BsSun />
            Light
          </div>
          <div
            className="flex justify-center items-center gap-2"
            onClick={() => setTheme("Dark")}
          >
            <BsFillMoonFill />
            Dark
          </div>
        </div>
      )}
    </button>
  );
}
