// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import {BrowserRouter, Route, RouterModule, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>

      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
