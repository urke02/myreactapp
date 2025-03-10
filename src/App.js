import './App.css';
import Home from '../src/pages/Home'
import AboutUs from '../src/pages/about-us/AboutUs'
import ContactUs from'./pages/contact-us/ContactUs'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Register from './pages/auth/register/Register'
import Login from './pages/auth/login/Login';

function App() {
  return (
    <div className='app__layout'>
      <Navbar />
      
      <main className='main' role='main'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='about-us' element={<AboutUs/>}/>
          <Route path='contact-us' element={<ContactUs/>}/>
        </Routes>
      </main>

      <Footer />
    </div> 
  );
}

export default App;
