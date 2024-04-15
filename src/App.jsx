import './App.css';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';

import {Route, Routes, Router } from 'react-router-dom';

//Pages
import Home from './pages/Home';
import About from './pages/About.jsx';
import Portafolio from './pages/Portafolio';
import Contact from './pages/Contact.jsx';
import ParkerSvg from './components/ParkerSvg.jsx';
import { Sidebar } from './components/Sidebar.jsx';



function App() {
  return (
    <>
     <div className="App">
     <Navbar/>
     <main className='inicio'>
      <ParkerSvg className='Svg'/>
      <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/portafolio' element={<Portafolio/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer className='Footer'/>
      
     </main>
 
    </div>
		
  
   
    </>
    
  
  );
}

export default App;
