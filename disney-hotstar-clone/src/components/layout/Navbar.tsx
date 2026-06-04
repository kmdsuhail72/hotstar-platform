import { FaHome, FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0F1014] text-white">
      <div className="flex items-center justify-between px-8 py-4">
        <h1 className="text-2xl font-bold">
          Disney+ Hotstar
        </h1>

        <div className="flex gap-6">
          <FaHome size={20} />
          <FaSearch size={20} />
        </div>
      </div>
    </nav>
  );
}