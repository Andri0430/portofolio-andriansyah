import { BiArrowToTop } from "react-icons/bi";
export default function ButtonScroll({ ...props }) {
  return (
    <button
      {...props}
      className="flex text-2xl bg-gray-300 rounded-full p-2 m-1"
    >
      <BiArrowToTop />
    </button>
  );
}