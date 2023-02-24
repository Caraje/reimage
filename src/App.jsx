import { Route, Routes } from 'react-router-dom'
import EditorPage from './components/EditorPage'
import HomePage from './components/HomePage'

function App () {
  return (
    <div className='flex flex-col bg-slate-800 min-h-screen text-white font-nunito'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/editor' element={<EditorPage />} />
      </Routes>
    </div>
  )
}

export default App
