import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import Footer from "./Footer";
import SideBar from "./SideBar";
import { createContext } from "react";
import { useRef } from "react";
import ButtonScroll from "./components/ButtonScroll";
import { useEffect } from "react";

export const ThemeContext = createContext({
  theme: null,
  setTheme: () => {},
  clickMode: null,
  setClickMode: () => {},
});

export default function App() {
  const [theme, setTheme] = useState("Light");
  const [clickMode, setClickMode] = useState(false);
  const [sideBar, setSideBar] = useState(true);
  const [clickMenu, setClickMenu] = useState("Home");
  const containerRef = useRef(null);

  useEffect(() => {
    theme === "Dark" ? console.log("Mode Gelap") : console.log("Mode Terang");
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme, clickMode, setClickMode }}>
      <Header
        theme={theme}
        setTheme={setTheme}
        sideBar={sideBar}
        setSideBar={setSideBar}
      />
      <div className="flex" ref={containerRef}>
        <SideBar
          sideBar={sideBar}
          setSideBar={setSideBar}
          clickMenu={clickMenu}
          setClickMenu={setClickMenu}
          theme={theme}
          setTheme={setTheme}
        />
        <div
          className={`${
            theme == "Dark" && "bg-slate-700"
          } flex flex-col items-center`}
          onClick={() => {
            if (sideBar === false) {
              setSideBar(true);
            }
          }}
        >
          <Outlet
            context={[
              theme,
              setTheme,
              sideBar,
              setSideBar,
              clickMenu,
              setClickMenu,
            ]}
          />
          <ButtonScroll
            onClick={() =>
              containerRef.current.scrollIntoView({ behavior: "smooth" })
            }
          />
          <Footer
            theme={theme}
            setTheme={setTheme}
            sideBar={sideBar}
            setSideBar={setSideBar}
          />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
