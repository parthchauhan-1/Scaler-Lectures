import './App.css';
import Navbar from './Components/Navbar';
import WatchList from './Components/WatchList';
import Movies from './Components/Movies';
import Banner from './Components/Banner';
import {BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={
            <>
              <Banner />
              <Movies />
            </>
          }>
          </Route>
          <Route path='/watchlist' element={
            <>
              <WatchList />
            </>
          }>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
