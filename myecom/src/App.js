import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import CardPage from './pages/Cart';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />

    <Route path="/products" element={<Products />} />
    <Route path="/card" element={<CardPage />} />
    </Routes>
    </BrowserRouter>
      </>
  );
}

export default App;
