import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import Footer from "./Footer";
import SideBar from "./SideBar";
import { createContext } from "react";

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
  return (
    <ThemeContext.Provider value={{ theme, setTheme, clickMode, setClickMode }}>
      <Header
        theme={theme}
        setTheme={setTheme}
        sideBar={sideBar}
        setSideBar={setSideBar}
      />
      <div className="flex">
        <SideBar
          sideBar={sideBar}
          setSideBar={setSideBar}
          clickMenu={clickMenu}
          setClickMenu={setClickMenu}
          theme={theme}
          setTheme={setTheme}
        />
        <div
          className="flex-col"
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
