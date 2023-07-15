import {AiOutlineCopyrightCircle} from "react-icons/ai"
export default function Footer({ mode, setSideBar, sideBar }) {
  return (
    <footer
      className={`${mode === "Dark" ? 'bg-slate-800' : 'bg-gray-200'} flex flex-col items-center p-2 gap-1 justify-center`}
      onClick={() => setSideBar(!sideBar)}
    >
      <p className={`${mode === "Dark" && "text-gray-300"} text-gray-500 flex items-center`}>
        <AiOutlineCopyrightCircle/>Copyright by Andri 2023
      </p>
      <p className={`${mode === "Dark" && "text-gray-300"} text-gray-500`}>
        Website Portofolio Andriansyah
      </p>
    </footer>
  );
}
