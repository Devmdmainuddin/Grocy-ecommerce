
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'

function App() {


  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  )
}

export default App
