import React, { Suspense ,  useEffect } from 'react'

import Router from './router/Router'

const App = () => {

  return (
    <Suspense fallback={null}>
      <Router />
    </Suspense>
  )
}

export default App
