import { useChatStore } from "../store/useChatStore.js";
import Sidebar from "../components/Sidebar.jsx";
import NoChatSelected from "../components/NoChatSelected.jsx";
import ChatContainer from "../components/ChatContainer.jsx";

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (

    <div className="min-h-screen w-full bg-black flex relative pt-16"> 
      <div className="relative z-10 w-full h-[calc(100vh-4rem)] 
            bg-black/80 backdrop-blur-xl flex overflow-hidden"> 
        
        <Sidebar />

        <div className="flex-1 flex flex-col bg-gray-800/60 overflow-hidden"> 
          {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
        </div>
      </div>
    </div>
  );
};

export default HomePage;