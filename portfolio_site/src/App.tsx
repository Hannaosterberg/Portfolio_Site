// import RainbowBackground from "./components/RainbowBackground"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {


  return (
    <Router>
      {/* <RainbowBackground /> */}
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Projects" element={<Projects />}/>
          <Route path="/Contact" element={<Contact />}/>
        </Routes>
      </div>
      <Header />
    </Router>
  )
}

export default App
