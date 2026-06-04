import {
  FaHome,
  FaSearch,
  FaTv,
  FaFilm,
  FaUser,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-20 bg-[#0F1014] text-white flex flex-col items-center pt-8 gap-8">
      <FaHome size={22} />
      <FaSearch size={22} />
      <FaTv size={22} />
      <FaFilm size={22} />
      <FaUser size={22} />
    </aside>
  );
}