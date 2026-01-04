import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore.js"; 
import { Camera, Mail, User, LogOut } from "lucide-react";

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile, logout } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image }); 
    };
  };

  return (
    <div className="min-h-screen w-full flex justify-center pt-24 pb-16 relative overflow-hidden">
      <div 
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/signuppage.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-lg px-6">
        <div className="w-full mt-4 bg-black/80 backdrop-blur-xl shadow-2xl shadow-purple-500/30 p-8 space-y-10 border border-purple-700/50 rounded-2xl">

          <div className="flex flex-col items-center text-center gap-4">
            <div className="relative">
              <img
                src={selectedImg || authUser.profilePic || "/avatar.png"}
                alt="Profile"
                className="size-36 rounded-full object-cover border-4 border-purple-500/50 shadow-xl"
              />

              <label
                htmlFor="avatar-upload"
                className={`absolute bottom-1 right-1 bg-purple-600 hover:bg-purple-700 
                  p-3 rounded-full shadow-lg shadow-purple-500/50 cursor-pointer transition-all
                  ${isUpdatingProfile ? "animate-pulse pointer-events-none" : ""}`}
              >
                <Camera className="size-5 text-white" />
                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isUpdatingProfile}
                />
              </label>
            </div>

            <h2 className="text-3xl font-bold text-white">
              {authUser.fullName}
            </h2>
            <p className="text-purple-400 text-sm">
              {isUpdatingProfile ? "Ładowanie zdjęcia..." : "Kliknij ikonę aparatu, aby zmienić zdjęcie"}
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="bg-gray-800/80 border border-purple-700/50 rounded-xl p-4 flex items-center gap-4">
              <User className="text-purple-400 w-6 h-6" />
              <div>
                <p className="text-gray-300 text-sm">Pełne Imię</p>
                <p className="text-white font-medium text-lg">{authUser.fullName}</p>
              </div>
            </div>

            <div className="bg-gray-800/80 border border-purple-700/50 rounded-xl p-4 flex items-center gap-4">
              <Mail className="text-purple-400 w-6 h-6" />
              <div>
                <p className="text-gray-300 text-sm">Email</p>
                <p className="text-white font-medium text-lg">{authUser.email}</p>
              </div>
            </div>

            <div className="bg-gray-800/80 border border-purple-700/50 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Członek od</span>
                <span className="text-white font-medium">
                  {authUser.createdAt?.split("T")[0]}
                </span>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={logout}
          className="mt-8 w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl
          font-semibold flex items-center justify-center gap-2 transition-all duration-200
          shadow-xl shadow-red-500/40"
        >
          <LogOut className="size-5" />
          Wyloguj
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;