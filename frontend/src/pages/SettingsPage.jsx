import { Link } from "react-router-dom";
import { User, Bell, Shield, Info, LogOut, ChevronRight } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore.js"; // Poprawiam rozszerzenie na .js

const SettingsPage = () => {
  const { logout } = useAuthStore();

  return (
    // Główny kontener strony z tłem
    // Dodajemy padding na górze, aby uniknąć zasłaniania przez Navbar
    <div className="min-h-screen pt-20 relative"> 
      
      {/* Tło - używamy tła kosmicznego, tak jak na innych stronach */}
      <div 
        className="fixed inset-0 bg-cover bg-center"
        // Zmień '/signuppage.jpg' na właściwą ścieżkę do Twojego kosmicznego tła,
        // np. w folderze 'public'
        style={{ backgroundImage: "url('/signuppage.jpg')" }} 
      >
        {/* Lekka nakładka, aby tło nie przeszkadzało w czytaniu */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Kontener centujący Panel Ustawień - Z-Index zapewnia, że jest na wierzchu tła */}
      <div className="max-w-xl mx-auto p-4 flex items-start justify-center relative z-10">
        
        {/* Główny Panel Ustawień - Jest WIDOCZNY i CZYTELNY. 
            Ma solidne tło bg-black/80, które blokuje większość tła graficznego.
        */}
        <div className="w-full mt-10 bg-black/80 backdrop-blur-md rounded-xl shadow-2xl p-6 space-y-6 border-2 border-purple-700/50">
          
          {/* Tytuł */}
          <h1 className="text-3xl font-bold text-white text-center mb-6">
            Ustawienia
          </h1>
          
          {/* Sekcja Opcji */}
          <div className="bg-gray-800/80 rounded-xl divide-y divide-gray-700/50 overflow-hidden">
            {/* Opcja: Profil */}
            <Link
              to="/profile"
              className="flex items-center justify-between p-4 text-white hover:bg-purple-900/40 transition-all"
            >
              <div className="flex items-center gap-4">
                <User className="w-6 h-6 text-purple-400" />
                <span className="text-lg">Profil</span>
              </div>
              <ChevronRight className="w-5 h-5 opacity-70" />
            </Link>

            {/* Opcja: Powiadomienia */}
            <button className="w-full flex items-center justify-between p-4 text-white hover:bg-purple-900/40 transition-all">
              <div className="flex items-center gap-4">
                <Bell className="w-6 h-6 text-purple-400" />
                <span className="text-lg">Powiadomienia</span>
              </div>
              <ChevronRight className="w-5 h-5 opacity-70" />
            </button>

            {/* Opcja: Prywatność i Bezpieczeństwo */}
            <button className="w-full flex items-center justify-between p-4 text-white hover:bg-purple-900/40 transition-all">
              <div className="flex items-center gap-4">
                <Shield className="w-6 h-6 text-purple-400" />
                <span className="text-lg">Prywatność i Bezpieczeństwo</span>
              </div>
              <ChevronRight className="w-5 h-5 opacity-70" />
            </button>

            {/* Opcja: Informacje */}
            <button className="w-full flex items-center justify-between p-4 text-white hover:bg-purple-900/40 transition-all">
              <div className="flex items-center gap-4">
                <Info className="w-6 h-6 text-purple-400" />
                <span className="text-lg">Informacje o aplikacji</span>
              </div>
              <ChevronRight className="w-5 h-5 opacity-70" />
            </button>
          </div>

          {/* Przycisk Wyloguj */}
          <button
            onClick={logout}
            className="mt-8 w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl
            font-semibold flex items-center justify-center gap-2 transition-all duration-200
            shadow-xl shadow-red-500/40"
          >
            <LogOut className="w-5 h-5" />
            Wyloguj
          </button>

        </div>
      </div>
    </div>
  );
};

export default SettingsPage;