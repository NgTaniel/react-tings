import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import DemoPage from './pages/DemoPage/DemoPage'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/demo' element={<DemoPage/>}/>
      </Routes>
    </>
  )
}
