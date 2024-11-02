import ImgBg from "./shared/components/ImgBg";
import Navbar from "./components/navBar/Navbar";
import Aside from "./components/aside/Aside";
import About from "./pages/about/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Skills from "./pages/skills/Skills";
import Services from "./pages/services/Services";
import Contacts from "./pages/contacts/Contacts";
import { useRef } from "react";



function App() {

  const app = useRef(null);

  return (
    <div className="bgImg">
      <div className="app" ref={app}>
        <Router>
            <Navbar app={app}/>
            <div className="container">
              <Aside />
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contacts" element={<Contacts />} />
              </Routes>
              </div>
            <ImgBg />
        </Router>
      </div>
    </div>
  );
}

export default App;
