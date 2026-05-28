import { Search } from "lucide-react";
import { useNavigate } from "react-router";

function SearchIcon() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/search")}
      className=" p-2 rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-white/30 dark:border-slate-700/30 hover:border-blue-400/50 transition-all duration-300"
    >
      <Search className="w-5 h-5 text-gray-700 dark:text-gray-300" />
    </button>
  );
}

export default SearchIcon;
