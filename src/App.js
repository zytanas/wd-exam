import './App.css';
import Navbar from './Components/NavBar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Features from './Components/Features/Features'
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs.jsx'


function App() {
  return (
    <>
    <Router>
    <Navbar />
    <div className='container'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/features' element={<Features />} />
      <Route path='/about-us' element={<AboutUs />} />
      <Route path='/contact-us' element={<ContactUs />} />
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
