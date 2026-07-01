import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Products from "./components/Products";
import Footer from "./components/Footer";

import MediExplain from "./pages/MediExplain";

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Products />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/mediexplain"
          element={<MediExplain />}
        />

      </Routes>

      <Footer />
    </>
  );
}

export default App;