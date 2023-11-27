import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/Slider/Slider";
import LabTabs from "./components/LabTabs/LabTabs";
// import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import Chat from "./components/Chat/Chat";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Chat />
      <Slider />
      <LabTabs />
    </div>
  );
}

export default App;
