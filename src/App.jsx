
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import {Navbar,Footer,Home} from './Components/index.js';
import Residencia from './Pages/Residencia.jsx';
import Inmobiliaria from './Pages/Inmobiliaria.jsx';
import Conserjeria from './Pages/Conserjeria.jsx';







function App() {
 
  return (
       
<Router >
   <Navbar />
       <Routes>
          <Route index element={<Home />} />
          <Route path="/Residencia" element={<Residencia />} />
          <Route path="/Inmobiliaria" element={<Inmobiliaria />} />
          <Route path="/Conserjeria" element={<Conserjeria />} /> 
       </Routes>
    <Footer />
</Router>
  )
}

export default App