import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';

import {Route, Routes, Router } from 'react-router-dom';

//Pages
import Home from './pages/Home';
import About from './pages/About.jsx';
import Portafolio from './pages/Portafolio';
import Contact from './pages/Contact.jsx';


function App() {
  return (
    <>
     <div className="App">
     <Navbar/>

      <Routes>
          
            <Route path='/home' element={<Home/>}/>
            <Route path='/portafolio' element={<Portafolio/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
          
      </Routes>
      
    </div>
		
			<Footer />

    
   
    </>
    
  
  );
}

export default App;
