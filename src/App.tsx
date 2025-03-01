import { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./sections/Home";
import Products from "./sections/Products";
import About from "./sections/About";
import Contact from "./sections/Contact";
import "./App.css";

function App() {
  const [, setCurrentSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
          current = section.getAttribute("id") || "";
        }
      });

      setCurrentSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="snap-container">
        <Home />
        <Products /> {/* Sin props de búsqueda */}
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;