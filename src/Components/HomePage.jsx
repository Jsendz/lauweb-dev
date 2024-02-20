import React from 'react';
import About from './About';
import Home from './Home';
import { useParams } from 'react-router-dom';


const HomePage = () => {


    const { section } = useParams();

  return (
    <div>
      <Home />
      {section === 'about' && <About />}
      
        
    </div>
  )
}

export default HomePage;