
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'
import { useDispatch } from 'react-redux';
import { setAuth } from './Featured/Auth/authSlice';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const authenticate = JSON.parse(localStorage.getItem('authenticate'));

    if (user && authenticate) {
      dispatch(setAuth({ user }));
    }
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  )
}

export default App
