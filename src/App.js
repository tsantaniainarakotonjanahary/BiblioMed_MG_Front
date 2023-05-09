import React, { Suspense ,  useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';




// ** Router Import
import Router from './router/Router'

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease',
    });
  }, []);

  
  return (
    <Suspense fallback={null}>
      <Router />
    </Suspense>
  )
}

export default App
