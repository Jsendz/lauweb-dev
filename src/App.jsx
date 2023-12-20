

import { Forest } from '../public/assets';
import './App.css';


import {Navbar, Before2, Business, Immo,Footer, Active, Passive, Consergeria } from './Components/index.js';
Forest



function App() {
 
  return (
       
<div >
    <div style={{ backgroundImage: `url(${Forest})`,backgroundSize: 'cover' }}>
   <Navbar />
    <Before2 />
    </div>
   
    
    
    <Business />
    <Active />
    <Passive />
    <Immo />
    <Consergeria />

    
    <Footer />
    
    


</div>
  )
}

export default App
