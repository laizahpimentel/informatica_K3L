// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SobrePage from "./Pages/SobrePage";

// import ContatoPage from "./pages/ContatoPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<SobrePage />} />
        {/* <Route path="/contato" element={<ContatoPage />} /> */}
      </Routes>
    </Router>
  );
}
