import { Link, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { MessageSquare, Settings, User } from "lucide-react";

const Navbar = () => {
  const { authUser } = useAuthStore();
  const location = useLocation();

  const hideProfileBtn =
    location.pathname === "/settings" || location.pathname === "/profile";

  return (
    <header
      className="
        fixed top-0 w-full z-40
        bg-[#0a0a14]/70
        backdrop-blur-xl
        border-b border-white/10
        shadow-lg shadow-purple-500/5
      "
    >
      <div className="px-4 h-16">
        <div className="flex items-center justify-between h-full">
          
          <Link to="/" className="flex items-center gap-3 group mx-2 sm:mx-0">
            <div
              className="
                size-9 rounded-xl 
                bg-purple-500/20 
                flex items-center justify-center
                group-hover:bg-purple-500/30 transition-all
              "
            >
              <MessageSquare className="w-5 h-5 text-purple-400" />
            </div>
            <h1 className="text-lg font-bold text-white tracking-wide group-hover:text-purple-300 transition-colors">
              Lumeo
            </h1>
          </Link>

          <div className="flex items-center gap-2 text-white">

            <Link
              to="/settings"
              className="
                px-3 py-1.5 rounded-lg
                bg-white/5 border border-white/10
                hover:bg-purple-600/20 hover:border-purple-400/40 
                transition-all flex items-center gap-2
              "
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </Link>

            {authUser && !hideProfileBtn && (
              <Link
                to="/profile"
                className="
                  px-3 py-1.5 rounded-lg
                  bg-white/5 border border-white/10
                  hover:bg-purple-600/20 hover:border-purple-400/40
                  transition-all flex items-center gap-2
                "
              >
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">Profile</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
