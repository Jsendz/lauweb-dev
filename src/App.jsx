
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import {Navbar,Footer,Home,Options,About} from './Components/index.js';
import Residencia from './Pages/Residencia.jsx';
import Inmobiliaria from './Pages/Inmobiliaria.jsx';
import Conserjeria from './Pages/Conserjeria.jsx';
import Empresa from './Pages/Empresa.jsx';







function App() {
 
  return (
       
<Router >
   <Navbar />
   <Options/>
       <Routes>
          <Route index element={<Home />} />
          <Route path="/:locale" element={<Empresa />} />
          <Route path="/Residencia" element={<Residencia />} />
          <Route path="/Inmobiliaria" element={<Inmobiliaria />} />
          <Route path="/Conserjeria" element={<Conserjeria />} /> 
       </Routes>
       <About />
    <Footer />
</Router>
  )
}

export default App