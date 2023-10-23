

import './App.css';
import {Navbar, Before2, Business, Immo,Footer, Servicios } from './Components/index.js';


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
    
    <Footer />


</div>
  )
}

export default App
