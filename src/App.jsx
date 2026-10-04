import ChatSection from "./components/chatSection/ChatSection";
import Darkmode from "./components/Darkmode/Darkmode";
import Separation from "./components/Seperation/Separation";


import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
     <Sidebar />
<Separation />
<ChatSection />
      {/* <Darkmode/> */}
    </div>
  );
}

export default App;