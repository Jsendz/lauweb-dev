

import { Forest } from './assets';
import './App.css';


import {Navbar, Before2, Business, Inmobiliaria,Footer, Activa, Pasiva, Consergeria, About  } from './Components/index.js';
Forest



function App() {
 
  return (
       
<div >
    <div style={{ backgroundImage: `url(${Forest})`,backgroundSize: 'cover' }}>
   <Navbar />
    <Before2 />
    </div>
   
    
    
    <Business />
    <Activa />
    <Pasiva />
    <Inmobiliaria />
    <Consergeria />
    <About />

    
    <Footer />
    
    


</div>
  )
}

export default App
