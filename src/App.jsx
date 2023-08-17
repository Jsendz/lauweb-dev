import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-slate-200 h-screen w-full m-0 flex flex-col justify-around items-center">

      <h1 className="text-8xl antialiased font-extrabold">Hilltop Agency</h1>
      <h2 className="text-6xl antialiased font-bold">En construccion</h2>
      <p className="text-2xl">Podemos ayudarte mientras tanto aqui: </p>
      

    </div>
  )
}

export default App
