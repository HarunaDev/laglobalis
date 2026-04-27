import { useState, type JSX } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./components/Header.jsx";
import Home from "./pages/home/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Academy from "./pages/learn/Academy";
// import Footer from "./components/Footer.js";


function App(): JSX.Element {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <>
    <BrowserRouter>
    <div className="min-h-screen flex flex-col">
    <Header onContactHover={setIsHovered} />
      <main className="flex-1">
      <Routes>
        <Route path="/" element={<Home isHovered={isHovered}/>}/>
        <Route path="/academy" element={<Academy isHovered={isHovered}/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      </main>
      <Footer />
    </div>
      
    </BrowserRouter>
      
    </>
  );
}

export default App;
