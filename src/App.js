import ImgBg from "./shared/components/ImgBg";
import Navbar from "./components/navBar/Navbar";
import Aside from "./components/aside/Aside";
import About from "./pages/about/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (
    <div className="bgImg">
      <div className="app">
        <Router>
            <Navbar />
            <div className="container">
              <Aside />
              <Routes>
                <Route path="/" element={<About />} />
              </Routes>
              </div>
            <ImgBg />
        </Router>
      </div>
    </div>
  );
}

export default App;
