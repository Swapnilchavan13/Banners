import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { One } from "./Components/One";
import { Two } from "./Components/Two";
import { Three } from "./Components/Three";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="makeup" element={<One />} />
          <Route path="dental" element={<Two />} />
          <Route path="gym" element={<Three />} />
      </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
