import './App.css';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';

import {Route, Routes, Navigate } from 'react-router-dom';

//Pages
import Home from './pages/Home';
import About from './pages/About.jsx';
import Portafolio from './pages/Portafolio';
import Contact from './pages/Contact.jsx';



function App() {
  return (
    <>
     <div className="App">
     <Navbar className='navbar'/>
     <main className='inicio'>
      <Routes>
            <Route index element={<Home/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/portafolio' element={<Portafolio/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='*' element={<Navigate replace to="/" />} />

      </Routes>
     </main>
 		<Footer className='Footer'/>
    </div>
  
   
    </>
    
  
  );
}

export default App;
