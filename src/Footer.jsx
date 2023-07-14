export default function Footer({ mode, setMode }) {
  return (
    <footer
      className={`flex justify-center ${mode === "Dark" && "bg-slate-800"}`}
    >
      <div
        className={`flex flex-col items-center gap-2 p-5 text-gray-700 border-t-2 w-[85%] ${
          mode === "Dark" && "text-gray-100"
        }`}
      >
        <p>2023 Andriansyah</p>
        <p>Website Portofolio Andriansyah</p>
      </div>
    </footer>
  );
}
