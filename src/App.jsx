import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles/root.css";
import Nav from "./components/Nav";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Footer from "./components/Footer";
import Auth from "./Pages/Auth";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
