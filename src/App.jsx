import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-slate-200">
      <h1 className="text-6xl antialiased">Hilltop Agency Andorra</h1>
      <h2 className="text-4xl antialiased">Coming Soon</h2>
      <p className="text-2xl">Podemos ayudarte mientras tanto aqui: </p>
      

    </div>
  )
}

export default App
