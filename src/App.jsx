import ChatSection from "./components/chatSection/ChatSection";
import Darkmode from "./components/Darkmode/Darkmode";
import Separation from "./components/Seperation/Separation";


import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div>
      <Sidebar />
      <ChatSection />
      <Separation/>
      <Darkmode/>
    </div>
  );
}

export default App;