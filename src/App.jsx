
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import {Navbar,Footer} from './Components/index.js';
import {Residencia, Inmobiliaria, Conserjeria} from './Pages/Residencia.jsx';






function App() {
 
  return (
       
<Router >
   <Navbar />
       <Routes>
          <Route index element={<HomePage />} />
          <Route path="/Residencia" element={<Residencia />} />
          <Route path="/Inmobiliaria" element={<Inmobiliaria />} />
          <Route path="/Conserjeria" element={<Conserjeria />} /> 
       </Routes>
    <Footer />
</Router>
  )
}

export default App