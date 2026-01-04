import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 transition-opacity duration-300"
        style={{ backgroundImage: "url('/signuppage.jpg')" }}
      />
      <div className="absolute inset-0 from-black/80 to-transparent"></div>

      <div className="relative z-10 w-full max-w-md px-8 py-10 rounded-2xl 
        bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">

        <div className="flex justify-center mb-6">
          <div className="size-16 flex items-center justify-center bg-purple-600/20 rounded-xl">
            <MessageSquare className="size-8 text-purple-400" />
          </div>
        </div>

        <h2 className="text-center text-4xl font-extrabold text-white mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-gray-400 mb-6">
          Sign in to your account
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="text-sm text-gray-300 font-medium block mb-1">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-500" />
              <input
                type="email"
                className="w-full bg-black/30 border border-white/10 rounded-lg 
                pl-10 pr-4 py-3 text-white placeholder-gray-500
                focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-300 font-medium block mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-500" />
              <input
                type={showPassword ? "text" : "password"}
                className="w-full bg-black/30 border border-white/10 rounded-lg 
                pl-10 pr-12 py-3 text-white placeholder-gray-500
                focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />

              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center 
                text-gray-500 hover:text-white transition-colors"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="size-5" />
                ) : (
                  <Eye className="size-5" />
                )}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-lg 
            text-white font-semibold flex items-center justify-center space-x-2 
            transition-colors duration-200 disabled:bg-purple-800 disabled:cursor-not-allowed"
            disabled={isLoggingIn}
          >
            {isLoggingIn ? (
              <>
                <Loader2 className="size-5 animate-spin" />
                <span>Loading...</span>
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-gray-400">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-purple-400 hover:text-purple-300 font-medium"
            >
              Create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
