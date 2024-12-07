import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/Home/Home.jsx';
import Details from './pages/Details/Details.jsx';
import Store from './pages/Store/Store.jsx';
import Cart from './pages/Cart/Cart.jsx';
import CheckOut from './pages/CheckOut/CheckOut.jsx';
import Login from './pages/Auth/Login.jsx';
import Register from './pages/Auth/Register.jsx';
import { Provider } from 'react-redux';
import { store } from './Featured/store/store.js';
import Dashbord from './pages/Dashbord/Dashbord.jsx';
import AddProduct from './pages/Dashbord/Admin/AddProduct.jsx';
import ManageProducts from './pages/Dashbord/Admin/ManageProducts.jsx';
import Brand from './pages/Dashbord/Admin/Brand.jsx';
import Category from './pages/Dashbord/Admin/Category.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/details" element={<Details />} />
            <Route path="/store" element={<Store />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkOut" element={<CheckOut />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path="/dashbord" element={<Dashbord />} >
            <Route path="/dashbord/addProduct" element={<AddProduct />} />
            <Route path="/dashbord/manageProducts" element={<ManageProducts />} />
            <Route path="/dashbord/category" element={<Category />} />
            <Route path="/dashbord/brand" element={<Brand />} />
          </Route>
        </Routes>
      </Provider>

    </BrowserRouter>
  </StrictMode>,
)
