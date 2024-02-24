import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Synergy from "./pages/Synergy";

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/synergy" element={<Synergy/>} />
      </Routes>
    </div>
  );
}

export default App;
