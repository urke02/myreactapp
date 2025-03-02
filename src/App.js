import './App.css';
import Home from '../src/pages/Home'
import Register from '../src/pages/Register'
import AboutUs from '../src/pages/AboutUs'
import ContactUs from'../src/pages/ContactUs'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='about-us' element={<AboutUs/>}/>
        <Route path='contact-us' element={<ContactUs/>}/>
      </Routes>
      <Footer />
    </div> 
  );
}

export default App;
