

import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import GetApp from './pages/GetApp'

function App() {


  return (
    <>

      <Routes>

        <Route
          path='/' element={<Home />}
        />
        <Route
          path='/getapp' element={<GetApp />}
        />



      </Routes>

    </>
  )
}

export default App
