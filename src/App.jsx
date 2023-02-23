import { useState } from 'react'
function App () {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='min-h-screen flex flex-col bg-slate-900'>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
        
        <footer className='bg-orange-400  mt-auto'>Esto es el pie de pagina</footer>
    </div>
    </>
  )
}

export default App
