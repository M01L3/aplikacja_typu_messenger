import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare, User } from "lucide-react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    fullName: "", 
    email: "",
    password: "",
  });
  const { signup, isSigningUp } = useAuthStore(); 
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError(null); 
  };

  const validateForm = () => {
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.password) {
      setError("Please fill in all fields.");
      return false;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please enter a valid email address.");
      return false;
    }

    if (formData.password.length < 6) { 
      setError("Password must be at least 6 characters long.");
      return false;
    }

    setError(null);
    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const success = validateForm();

    if (success) signup(formData); 
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black relative overflow-hidden">
      
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 transition-opacity duration-300"
        style={{ backgroundImage: "url('/signuppage.jpg')" }}
      />
      <div className="absolute inset-0 from-black/80 to-transparent"></div>

      <div className="relative z-10 w-full max-w-md px-8 py-10 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
        
        <div className="flex justify-center mb-6">
          <div className="size-16 flex items-center justify-center bg-purple-600/20 rounded-xl">
            <MessageSquare className="size-8 text-purple-400" />
          </div>
        </div>
        <h2 className="text-center text-4xl font-extrabold text-white mb-2">
          Sign up
        </h2>
        
        {error && (
          <div className="bg-red-800/20 border border-red-500 text-red-300 p-3 rounded-lg mb-6">
            <p className="font-medium text-sm text-center">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label htmlFor="fullName" className="text-sm text-gray-300 font-medium block mb-1">Name*</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-500" />
              <input
                id="fullName"
                type="text"
                name="fullName" 
                className="w-full bg-black/30 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
                placeholder="Your name"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="text-sm text-gray-300 font-medium block mb-1">Email*</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-500" />
              <input
                id="email"
                type="email"
                name="email"
                className="w-full bg-black/30 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="text-sm text-gray-300 font-medium block mb-1">Password*</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-500" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                className="w-full bg-black/30 border border-white/10 rounded-lg pl-10 pr-12 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-white transition-colors"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">Must be at least 6 characterts.</p>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-lg text-white font-semibold flex items-center justify-center space-x-2 transition-colors duration-200 disabled:bg-purple-800 disabled:cursor-not-allowed"
            disabled={isSigningUp} 
          >
            {isSigningUp ? (
              <>
                <Loader2 className="size-5 animate-spin" />
                <span>Loading...</span>
              </>
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-gray-400">
            Already have an account?{" "}
            <Link to="/login" className="text-purple-400 hover:text-purple-300 font-medium">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;