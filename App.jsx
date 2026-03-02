import "./styles.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeroUIProvider } from "@heroui/react";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import Compose from "./pages/Compose";
import Scheduled from "./pages/Scheduled";
import History from "./pages/History";
import Settings from "./pages/Settings";
import About from "./pages/About";

function App() {
  return (
    <HeroUIProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Layout>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/compose" element={<Compose />} />
            <Route path="/scheduled" element={<Scheduled />} />
            <Route path="/history" element={<History />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </HeroUIProvider>
  );
}

export default App;
