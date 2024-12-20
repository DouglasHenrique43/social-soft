import reactLogo from "./assets/react.svg";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import { Navbar, Home, Generic1, Generic2 } from "./pages/z-index";

function App() {
  return (
    <Router>
      <main className="bgApp">
        {/* Barra de Navegação */}
        <Navbar />
        {/* Conteúdo principal da página */}
        <section className="bgSection">
          {/* Rotas */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/generic1" element={<Generic1 />} />
            <Route path="/generic2" element={<Generic2 />} />
          </Routes>
        </section>
      </main>
    </Router>
  );
}

export default App;
