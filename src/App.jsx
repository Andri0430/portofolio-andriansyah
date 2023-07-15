import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import Footer from "./Footer";
import SideBar from "./SideBar";

export default function App() {
  const [mode, setMode] = useState("Light");
  const [sideBar, setSideBar] = useState(true);
  const [clickMenu, setClickMenu] = useState("Home");
  return (
    <>
      <Header
        mode={mode}
        setMode={setMode}
        sideBar={sideBar}
        setSideBar={setSideBar}
      />
      <div className="flex">
        <SideBar
          sideBar={sideBar}
          setSideBar={setSideBar}
          clickMenu={clickMenu}
          setClickMenu={setClickMenu}
          mode={mode}
          setMode={setMode}
        />
        <div className="flex-col">
          <Outlet context={[mode,setMode,sideBar,setSideBar,clickMenu,setClickMenu]} />
          <Footer mode={mode} setMode={setMode} sideBar={sideBar} setSideBar={setSideBar}/>
        </div>
      </div>
    </>
  );
}
