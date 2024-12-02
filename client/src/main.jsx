import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/Home/Home.jsx';
import Details from './pages/Details/Details.jsx';
import Store from './pages/Store/Store.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/store" element={<Store />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
