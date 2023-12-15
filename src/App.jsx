

import './App.css';

import {Navbar, Before2, Business, Immo,Footer, Active, Passive, Consergeria } from './Components/index.js';
import LanguageDropdown from './Components/LanguageDropdown';



function App() {
 
  return (
       
<div >
    <div className="bg-[url('src/assets/forest.jpg')] bg-cover">
   <Navbar />
    <Before2 />
    </div>
   
    
    
    <Business />
    <Active />
    <Passive />
    <Immo />
    <Consergeria />

    
    <Footer />
    <LanguageDropdown />
    


</div>
  )
}

export default App
