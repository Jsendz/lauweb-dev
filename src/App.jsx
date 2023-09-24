

import './App.css';
import {Navbar, Before2, Hero, Business, Immo,Footer, CTA, Servicios } from './Components/index.js';


function App() {
 
  return (
       
<div >
    <div className="bg-[url('src/assets/forest.jpg')] bg-cover">
   <Navbar />
    <Before2 />
    </div>
    <Servicios />
    
    
    <Business />
    <Immo />
    <CTA />
    <Footer />


</div>
  )
}

export default App
