
import { Forest } from './assets';
import './App.css';


import {Navbar, Before2, Business, Inmobiliaria,Footer, Activa, Pasiva, Consergeria } from './Components/index.js';




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
    

    
    <Footer />
    
    


</div>
  )
}

export default App