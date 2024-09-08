import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/home';
import Register from './pages/registerpage';
import Login from './pages/loginpage';
import Cart from './pages/cart';
import Pizza from './pages/pizzas';
import Profile from './pages/profile';
import NotFound from './pages/notfound';
import Navbar from './components/navbar';
import { CartProvider } from './context/cartcontext'; 
import { useState } from 'react';

function App() {
  const [token, setToken] = useState(false); 
  return (
    <CartProvider>
      <Router>
        <Navbar token={token} /> {/* Pasa el token al Navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setToken={setToken} />} /> 
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/p001" element={<Pizza />} />
          <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
