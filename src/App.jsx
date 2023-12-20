

import './App.css';


import {Navbar, Before2, Business, Immo,Footer, Active, Passive, Consergeria } from './Components/index.js';




function App() {
 
  return (
       
<div >
    <div className="bg-forest bg-cover">
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
