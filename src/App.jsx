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
      <Navbar className='navbar'/>
     <div className="App">
     <main className='inicio'>
      <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/portafolio' element={<Portafolio/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
      </Routes>
      
      
     </main>
 
    </div>
		<Footer className='Footer'/>
  
   
    </>
    
  
  );
}

export default App;
