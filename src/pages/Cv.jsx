import { useContext } from "react";
import { useOutletContext } from "react-router-dom";
import { ThemeContext } from "../App";
import ThemeButton from "../components/ThemeButton";

export default function Cv() {
  const [sideBar, setSideBar] = useOutletContext();
  const { theme } = useContext(ThemeContext);
  return (
    <main
      className={`flex flex-col justify-center gap-8 px-10 py-14 ${
        theme === "Dark" && "bg-slate-700 text-gray-300"
      }`}
      onClick={() => {if(sideBar === false){setSideBar(true)}}}
    >
      <div className={`${
          theme === "Dark" && "bg-slate-600"
        } text-2xl p-1 hidden fixed top-2 right-10 items-center border-2 rounded-md cursor-pointer lg:flex`}>
      <ThemeButton/>
      </div>
      <div className="flex flex-col gap-1 text-justify">
        <h2 className="text-2xl font-bold">Profile</h2>
        <p className="text-sm">
          Saya seorang mahasiswa manajemen informatika tingkat akhir dengan
          pengalaman selama 2 tahun dalam bidang pemograman. Saya memiliki
          kemampuan yang baik dalam bekerja secara kelompok maupun secara
          mandiri. Memiliki pemahaman dan fondasi yang kuat dalam beberapa
          bahasa pemograman yang telah saya kuasai baik di bidang Back-End
          maupun Front-End. Selain itu, saya memiliki kemampuan public speaking
          yang baik. Saya juga memiliki ketertarikan yang besar dalam dunia
          pemograman dan selalu siap untuk mempelajari hal-hal baru.
        </p>
      </div>
      <div className="flex flex-col gap-1 text-justify">
        <h2 className="text-2xl font-bold">Pendidikan</h2>
        <div className="text-sm">
          <p className="font-bold">
            UNIVERSITAS NASIONAL PASIM – Bandung, Jawa Barat (2021-2023)
          </p>
          <p>D3 Manajemen Informatika – IPK 3.67</p>
        </div>
      </div>
      <div className="flex flex-col gap-1 text-justify">
        <h2 className="text-2xl font-bold">Pengalaman Organisasi</h2>
        <div className="text-sm">
          <p className="font-bold">
            Himpunan Mahasiswa Manajemen Informatika(HIMAMI)
          </p>
          <li className="indent-3">Divisi Kesejahterahan HIMAMI</li>
          <li className="indent-3">Anggota aktif HIMAMI</li>
        </div>
      </div>
      <div className="flex flex-col gap-1 text-justify">
        <h2 className="text-2xl font-bold">Keahlian</h2>
        <div className="flex flex-row flex-wrap gap-4">
          <div className="text-sm w-[186px]">
            <p className="font-bold">Bahasa Pemograman</p>
            <li className="indent-3">C</li>
            <li className="indent-3">C++</li>
            <li className="indent-3">C#</li>
            <li className="indent-3">VB.NET</li>
          </div>
          <div className="text-sm w-[186px]">
            <p className="font-bold">Framework</p>
            <li className="indent-3">.NET Framework</li>
            <li className="indent-3">.NET Core</li>
            <li className="indent-3">ASP .NET</li>
            <li className="indent-3">ASP .NET Core WEB API</li>
            <li className="indent-3">Entity Framework</li>
          </div>
          <div className="flex flex-col gap-1 text-justify">
            <div className="text-sm w-[186px]">
              <p className="font-bold">Database </p>
              <li className="indent-3">SQL Server</li>
              <li className="indent-3">MySql</li>
            </div>
          </div>
          <div className="flex flex-col gap-1 text-justify">
            <div className="text-sm w-[186px]">
              <p className="font-bold">Web Development</p>
              <li className="indent-3">HTML,CSS,Javascript</li>
              <li className="indent-3">React</li>
              <li className="indent-3">Boostrap</li>
              <li className="indent-3">Tailwind CSS</li>
            </div>
          </div>
          <div className="flex flex-col gap-1 text-justify">
            <div className="text-sm w-[186px]">
              <p className="font-bold">Version Control</p>
              <li className="indent-3">Git</li>
              <li className="indent-3">Github</li>
            </div>
          </div>
          <div className="flex flex-col gap-1 text-justify">
            <div className="text-sm w-[186px]">
              <p className="font-bold">Tools</p>
              <li className="indent-3">Visual Studio</li>
              <li className="indent-3">Visual Studio Code</li>
              <li className="indent-3">Microsoft Word</li>
              <li className="indent-3">Microsoft Excel</li>
              <li className="indent-3">Power Point</li>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}