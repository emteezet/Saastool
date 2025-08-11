import { BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import './styles/root.css';
import Nav from './components/Nav';
import Home from './Pages/Home';
import Hero from './components/Hero'
import Services from './components/Services';
import PricePlan from './components/PricePlan';
import SubForm from './components/SubForm';
import Footer from './components/Footer';

function App() {
 

  return (
    <>
      <Router>
        <Nav />
          {/* <Routes path= '/' element= {<Home />} /> */}
        <Hero />
        <Services />
        <PricePlan />
        <SubForm />
        <Footer />
      </Router>
     
    </>
  )
}

export default App
