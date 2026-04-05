import { BrowserRouter, Route, Routes } from "react-router";

import FourOhFourPage from "./pages/404";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    // Default font is Times New Roman
    <div className="font-['Times New Roman', serif]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<FourOhFourPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
