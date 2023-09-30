import './App.css';
import Cart from './Components/Cart';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home'


function App() {
  return (
    <div className='w-screen h-screen'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
